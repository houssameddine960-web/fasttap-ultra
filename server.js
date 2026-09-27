/* =========================================================
   FastTap Ultra Server
   يدعم: Matchmaking، Ranked MMR، أصدقاء، دردشة، صناديق
   ========================================================= */
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const { v4: uuid } = require('uuid');

const app = express();
const server = http.createServer(app);
const PORT = Number(process.env.PORT || 3000);
const TRUSTED_ORIGIN = process.env.PUBLIC_ORIGIN || true;
const io = new Server(server, { cors: { origin: TRUSTED_ORIGIN, methods: ['GET', 'POST'] } });

app.disable('x-powered-by');
app.set('trust proxy', 1);

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, service: 'fasttap-ultra', version: '4.2.0' });
});
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});
app.use(express.json({ limit: '16kb' }));
app.use(express.static(path.join(__dirname, '..', 'public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0,
  etag: true
}));

/* ============ مخازن مؤقتة (يُفضل قاعدة بيانات في الإنتاج) ============ */
const users = new Map();       // userId -> { id, name, avatar, mmr, rank, wins, losses, friends:[], socketId, roomId }
const rooms = new Map();        // roomCode -> room
const matchQueue = [];          // { userId, mmr, socketId, joinedAt }
const playerSocket = new Map(); // socketId -> userId

const RANKS = [
  { name:'Bronze',   min:0,    icon:'🥉' },
  { name:'Silver',   min:800,  icon:'🥈' },
  { name:'Gold',     min:1200, icon:'🥇' },
  { name:'Platinum', min:1600, icon:'💠' },
  { name:'Diamond',  min:2000, icon:'💎' },
  { name:'Master',   min:2400, icon:'👑' },
  { name:'Grandmaster', min:2800, icon:'🏆' }
];

function getRank(mmr){
  let r = RANKS[0];
  for(const rk of RANKS) if(mmr >= rk.min) r = rk;
  return r;
}

function genCode(){
  let code;
  do { code = String(Math.floor(100000 + Math.random()*900000)); }
  while(rooms.has(code));
  return code;
}

function cleanName(value, fallback='Player'){
  const name = String(value ?? '').replace(/[<>\u0000-\u001F]/g, '').trim().slice(0,24);
  return name || fallback;
}

function cleanAvatar(value){
  return String(value ?? '👤').slice(0,8) || '👤';
}

function clampInt(value, min, max, fallback){
  const n = Number(value);
  if(!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, Math.floor(n)));
}

function getRoomPlayer(room, socketId){
  return room?.players.find(p => p.id === socketId);
}

/* ============ Socket.io ============ */
io.on('connection', socket => {
  console.log('🔌 Connected:', socket.id);

  /* -------- تسجيل المستخدم -------- */
  socket.on('register', ({ userId, name, avatar } = {}, cb) => {
    userId = String(userId || uuid()).slice(0,80);
    name = cleanName(name);
    avatar = cleanAvatar(avatar);
    let user = users.get(userId);
    if(!user){
      user = {
        id: userId || uuid(),
        name,
        avatar,
        mmr: 1000,
        wins: 0, losses: 0,
        friends: [],
        socketId: socket.id,
        roomId: null,
        lastDailyBox: 0,
        coins: 0
      };
      users.set(user.id, user);
    } else {
      user.socketId = socket.id;
      user.name = name;
      user.avatar = avatar;
    }
    playerSocket.set(socket.id, user.id);
    socket.join('user_' + user.id);
    cb && cb({
      ok: true,
      user: {
        id: user.id, name: user.name, avatar: user.avatar,
        mmr: user.mmr, rank: getRank(user.mmr),
        wins: user.wins, losses: user.losses,
        friends: user.friends, coins: user.coins
      }
    });
  });

  /* -------- إنشاء غرفة -------- */
  socket.on('createRoom', ({ name, config = {} } = {}, cb) => {
    const userId = playerSocket.get(socket.id);
    const user = users.get(userId);
    const room = {
      id: genCode(),
      host: userId,
      players: [],
      config: {
        duration: clampInt(config.duration, 5, 60, 10),
        goal: clampInt(config.goal, 10, 1000, 100),
        ranked: !!config.ranked
      },
      scores: { p1:0, p2:0, total:0 },
      started: false, finished: false, startAt: 0, timer: null,
      chat: []
    };
    rooms.set(room.id, room);
    if(user){
      user.roomId = room.id;
      room.players.push({ id: socket.id, userId, name: user.name, slot: 1, avatar: user.avatar });
    }
    socket.join(room.id);
    cb && cb({ ok:true, code: room.id, slot: 1 });
  });

  /* -------- الانضمام -------- */
  socket.on('joinRoom', ({ name, code } = {}, cb) => {
    name = cleanName(name);
    code = String(code || '').replace(/\D/g, '').slice(0,6);
    const room = rooms.get(code);
    if(!room) return cb && cb({ ok:false, error:'NOT_FOUND' });
    if(room.players.length >= 2) return cb && cb({ ok:false, error:'FULL' });
    if(room.started) return cb && cb({ ok:false, error:'STARTED' });

    const userId = playerSocket.get(socket.id);
    const user = users.get(userId);
    if(user) user.roomId = code;
    room.players.push({ id: socket.id, userId, name: user ? user.name : name, slot: 2, avatar: user ? user.avatar : '👤' });
    socket.join(code);

    io.to(code).emit('roomReady', {
      code,
      players: room.players.map(p => ({ name: p.name, slot: p.slot, avatar: p.avatar })),
      config: room.config
    });
    cb && cb({ ok:true, code, slot: 2 });
  });

  /* -------- Matchmaking تلقائي -------- */
  socket.on('findMatch', ({ userId, mmr, name, avatar } = {}, cb) => {
    userId = String(userId || playerSocket.get(socket.id) || uuid()).slice(0,80);
    mmr = clampInt(mmr, 0, 5000, 1000);
    name = cleanName(name);
    avatar = cleanAvatar(avatar);

    // لا تسمح بإضافة اللاعب نفسه للطابور أكثر من مرة.
    if(matchQueue.some(p => p.socketId === socket.id || p.userId === userId)){
      return cb && cb({ ok:false, error:'ALREADY_SEARCHING' });
    }

    matchQueue.push({ userId, mmr, socketId: socket.id, name, avatar, joinedAt: Date.now() });
    cb && cb({ ok:true, status:'searching' });

    // اختر أقرب MMR بين اللاعبين المنتظرين.
    if(matchQueue.length >= 2){
      let bestA = 0, bestB = 1, bestDiff = Infinity;
      for(let i=0;i<matchQueue.length;i++){
        for(let j=i+1;j<matchQueue.length;j++){
          const diff = Math.abs(matchQueue[i].mmr - matchQueue[j].mmr);
          if(diff < bestDiff){ bestDiff = diff; bestA = i; bestB = j; }
        }
      }
      const p2 = matchQueue.splice(bestB, 1)[0];
      const p1 = matchQueue.splice(bestA, 1)[0];
      const roomCode = genCode();
      const room = {
        id: roomCode,
        players: [
          { id: p1.socketId, userId: p1.userId, name: p1.name, slot: 1, avatar: p1.avatar },
          { id: p2.socketId, userId: p2.userId, name: p2.name, slot: 2, avatar: p2.avatar }
        ],
        config: { duration: 10, goal: 100, ranked: true },
        scores: { p1:0, p2:0, total:0 },
        started: false, finished: false, startAt: 0, timer: null, chat: []
      };
      rooms.set(roomCode, room);

      io.sockets.sockets.get(p1.socketId)?.join(roomCode);
      io.sockets.sockets.get(p2.socketId)?.join(roomCode);

      io.to(p1.socketId).emit('matchFound', { code: roomCode, opponent: { name: p2.name, avatar: p2.avatar, mmr: p2.mmr } });
      io.to(p2.socketId).emit('matchFound', { code: roomCode, opponent: { name: p1.name, avatar: p1.avatar, mmr: p1.mmr } });

      // تبدأ المباراة تلقائيًا بعد مهلة قصيرة حتى لا تتوقف Ranked عند شاشة العثور على الخصم.
      setTimeout(() => startRoom(roomCode), 1200);
    }
  });

  socket.on('cancelMatch', () => {
    const idx = matchQueue.findIndex(p => p.socketId === socket.id);
    if(idx >= 0) matchQueue.splice(idx, 1);
  });

  /* -------- بدء اللعب -------- */
  function startRoom(code){
    const room = rooms.get(code);
    if(!room || room.players.length < 2 || room.started || room.finished) return false;
    room.started = true;
    room.startAt = Date.now() + 5000;
    io.to(code).emit('gameStart', { startAt: room.startAt, config: room.config });
    setTimeout(() => {
      const current = rooms.get(code);
      if(current && current.started && !current.finished){
        current.timer = setTimeout(() => finishGame(code), current.config.duration * 1000);
      }
    }, 5000);
    return true;
  }

  socket.on('startGame', ({ code } = {}) => {
    code = String(code || '');
    const room = rooms.get(code);
    const player = getRoomPlayer(room, socket.id);
    if(!player || player.slot !== 1) return;
    startRoom(code);
  });

  /* -------- ضغط -------- */
  socket.on('tap', ({ code } = {}) => {
    code = String(code || '');
    const room = rooms.get(code);
    const player = getRoomPlayer(room, socket.id);
    if(!room || !player || room.finished || !room.started || Date.now() < room.startAt) return;

    // حد أمان مرتفع بما يكفي للعب الطبيعي ويمنع إغراق السيرفر بطلبات مصطنعة.
    const now = Date.now();
    const tapState = socket.data.tapRate || { start: now, count: 0 };
    if(now - tapState.start >= 1000){ tapState.start = now; tapState.count = 0; }
    tapState.count++;
    socket.data.tapRate = tapState;
    if(tapState.count > 30) return;

    const key = player.slot === 1 ? 'p1' : 'p2';
    room.scores[key]++;
    room.scores.total++;
    io.to(code).emit('scoreUpdate', { p1: room.scores.p1, p2: room.scores.p2, total: room.scores.total });
    if(room.scores[key] >= room.config.goal) finishGame(code, player.slot);
  });

  /* -------- دردشة الغرفة -------- */
  socket.on('chatMsg', ({ code, text } = {}) => {
    const room = rooms.get(String(code || ''));
    const player = getRoomPlayer(room, socket.id);
    text = String(text ?? '').replace(/[<>\u0000-\u001F]/g, '').trim().slice(0,200);
    if(!room || !player || !text) return;
    const userId = playerSocket.get(socket.id);
    const user = users.get(userId);
    const msg = { name: user?.name || 'Player', text, ts: Date.now() };
    room.chat.push(msg);
    io.to(code).emit('chatMsg', msg);
  });

  /* -------- أصدقاء -------- */
  socket.on('addFriend', ({ friendName }, cb) => {
    const userId = playerSocket.get(socket.id);
    const user = users.get(userId);
    if(!user) return cb && cb({ ok:false });

    const friend = [...users.values()].find(u => u.name === friendName);
    if(!friend) return cb && cb({ ok:false, error:'NOT_FOUND' });
    if(friend.id === user.id) return cb && cb({ ok:false, error:'SELF' });
    if(user.friends.includes(friend.id)) return cb && cb({ ok:false, error:'ALREADY' });

    user.friends.push(friend.id);
    cb && cb({ ok:true, friend: { id: friend.id, name: friend.name, avatar: friend.avatar } });
    io.to('user_' + friend.id).emit('friendAdded', { name: user.name, avatar: user.avatar });
  });

  socket.on('getFriends', (cb) => {
    const userId = playerSocket.get(socket.id);
    const user = users.get(userId);
    if(!user) return cb && cb({ ok:false });
    const list = user.friends.map(id => {
      const f = users.get(id);
      return f ? { id: f.id, name: f.name, avatar: f.avatar, online: !!f.socketId && io.sockets.sockets.has(f.socketId), mmr: f.mmr } : null;
    }).filter(Boolean);
    cb && cb({ ok:true, friends: list });
  });

  socket.on('inviteFriend', ({ friendId, code }) => {
    const friend = users.get(friendId);
    if(!friend) return;
    io.to('user_' + friendId).emit('friendInvite', { code });
  });

  /* -------- الصناديق اليومية -------- */
  socket.on('openDailyBox', (cb) => {
    const userId = playerSocket.get(socket.id);
    const user = users.get(userId);
    if(!user) return cb && cb({ ok:false });
    const now = Date.now();
    const day = 24*60*60*1000;
    if(now - user.lastDailyBox < day) return cb && cb({ ok:false, error:'COOLDOWN', nextIn: day - (now - user.lastDailyBox) });

    user.lastDailyBox = now;
    const rewards = [50, 100, 150, 200, 300];
    const coins = rewards[Math.floor(Math.random()*rewards.length)];
    user.coins += coins;
    cb && cb({ ok:true, coins, total: user.coins });
  });

  /* -------- مغادرة -------- */
  function handleLeave(s){
    const userId = playerSocket.get(s.id);
    const user = users.get(userId);
    if(user){
      const code = user.roomId;
      const room = rooms.get(code);
      if(room){
        room.players = room.players.filter(p => p.id !== s.id);
        io.to(code).emit('opponentLeft');
        if(room.players.length === 0){
          if(room.timer) clearTimeout(room.timer);
          rooms.delete(code);
        }
      }
      user.socketId = null;
      user.roomId = null;
    }
    playerSocket.delete(s.id);
    const idx = matchQueue.findIndex(p => p.socketId === s.id);
    if(idx >= 0) matchQueue.splice(idx, 1);
  }

  socket.on('leaveRoom', () => handleLeave(socket));
  socket.on('disconnect', () => handleLeave(socket));

  /* -------- نهاية اللعبة -------- */
  function finishGame(code, winnerSlot){
    const room = rooms.get(code);
    if(!room || room.finished) return;
    room.finished = true;
    if(room.timer) clearTimeout(room.timer);

    let winner = winnerSlot;
    if(!winner){
      if(room.scores.p1 > room.scores.p2) winner = 1;
      else if(room.scores.p2 > room.scores.p1) winner = 2;
      else winner = 0;
    }

    // تحديث MMR للـ Ranked
    if(room.config.ranked && winner !== 0){
      const winnerPlayer = room.players.find(p => p.slot === winner);
      const loserPlayer = room.players.find(p => p.slot !== winner);
      const wUser = users.get(winnerPlayer?.userId);
      const lUser = users.get(loserPlayer?.userId);
      if(wUser && lUser){
        const K = 32;
        const expected = 1 / (1 + Math.pow(10, (lUser.mmr - wUser.mmr) / 400));
        const delta = Math.round(K * (1 - expected));
        wUser.mmr += delta;
        lUser.mmr = Math.max(0, lUser.mmr - delta);
        wUser.wins++;
        lUser.losses++;
        io.to(winnerPlayer.id).emit('mmrUpdate', { delta: +delta, newMmr: wUser.mmr, rank: getRank(wUser.mmr) });
        io.to(loserPlayer.id).emit('mmrUpdate', { delta: -delta, newMmr: lUser.mmr, rank: getRank(lUser.mmr) });
      }
    }

    io.to(code).emit('gameOver', { winner, scores: room.scores });
    setTimeout(() => rooms.delete(code), 30000);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`⚡ FastTap Ultra running on port ${PORT}`);
});

function shutdown(signal){
  console.log(`${signal}: shutting down...`);
  io.close(() => server.close(() => process.exit(0)));
  setTimeout(() => process.exit(1), 10000).unref();
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));