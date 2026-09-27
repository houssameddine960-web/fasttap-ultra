const Online = (() => {
  let socket = null;
  let currentRoom = null;
  let mySlot = null;
  let handlers = {};
  let userId = localStorage.getItem('fasttap_uid') || ('u_' + Math.random().toString(36).slice(2,10));
  localStorage.setItem('fasttap_uid', userId);

  function connect(){
    if(socket && socket.connected) return Promise.resolve();
    return new Promise((resolve, reject) => {
      try{ socket = io({ reconnection: true, timeout: 5000 }); }
      catch(e){ return reject(e); }
      socket.on('connect', () => resolve());
      socket.on('connect_error', (e) => reject(e));

      const events = ['roomReady','gameStart','scoreUpdate','gameOver','opponentLeft',
        'matchFound','chatMsg','friendAdded','friendInvite','mmrUpdate'];
      events.forEach(ev => {
        socket.on(ev, data => handlers['on_' + ev] && handlers['on_' + ev](data));
      });
    });
  }

  function on(event, fn){ handlers[event] = fn; }
  function off(event){ delete handlers[event]; }

  async function register(name, avatar){
    await connect();
    return new Promise(res => {
      socket.emit('register', { userId, name, avatar }, res);
    });
  }

  async function createRoom(name, config){
    await connect();
    return new Promise(res => {
      socket.emit('createRoom', { name, config }, r => {
        if(r.ok){ currentRoom = r.code; mySlot = r.slot; }
        res(r);
      });
    });
  }

  async function joinRoom(name, code){
    await connect();
    return new Promise(res => {
      socket.emit('joinRoom', { name, code }, r => {
        if(r.ok){ currentRoom = r.code; mySlot = r.slot; }
        res(r);
      });
    });
  }

  async function findMatch(mmr, name, avatar){
    await connect();
    return new Promise(res => {
      socket.emit('findMatch', { userId, mmr, name, avatar }, res);
    });
  }

  function cancelMatch(){ socket && socket.emit('cancelMatch'); }

  function startGame(code){ socket && socket.emit('startGame', { code: code || currentRoom }); }
  function sendTap(){ socket && socket.emit('tap', { code: currentRoom, slot: mySlot }); }
  function sendChat(text){ socket && socket.emit('chatMsg', { code: currentRoom, text }); }
  function addFriend(name, cb){ socket && socket.emit('addFriend', { friendName: name }, cb); }
  function getFriends(cb){ socket && socket.emit('getFriends', cb); }
  function inviteFriend(friendId, code){ socket && socket.emit('inviteFriend', { friendId, code }); }
  function openDailyBox(cb){ socket && socket.emit('openDailyBox', cb); }

  function leave(){
    if(socket && currentRoom) socket.emit('leaveRoom');
    currentRoom = null; mySlot = null;
  }

  function getRoom(){ return currentRoom; }
  function getSlot(){ return mySlot; }
  function getUserId(){ return userId; }
  function isConnected(){ return socket && socket.connected; }

  return {
    connect, on, off, register,
    createRoom, joinRoom, findMatch, cancelMatch,
    startGame, sendTap, sendChat,
    addFriend, getFriends, inviteFriend, openDailyBox,
    leave, getRoom, getSlot, getUserId, isConnected
  };
})();