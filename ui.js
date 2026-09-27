/* =========================================================
   UI Module - Result Screen (Win/Lose/Draw) + Animations
   ========================================================= */
const ResultUI = (() => {

  /* ============ عرض شاشة النتيجة ============ */
  function show({ type, title, sub, stats, mmr, rewards, onRematch, onAgain, onHome }){
    const screen = $('resultScreen');
    const emoji = $('resultEmoji');
    const titleEl = $('resultTitle');
    const subEl = $('resultSub');
    const statsEl = $('resultStats');
    const mmrEl = $('resultMmr');
    const rewardsEl = $('resultRewards');
    const particlesEl = $('resultParticles');

    // type: 'win' | 'lose' | 'draw'
    screen.classList.remove('win','lose','draw');
    screen.classList.add(type);

    // الإيموجي حسب النوع
    const emojiMap = {
      win: ['🏆','🎉','👑','⚡','🔥','💎'],
      lose: ['😢','💔','😞','🥲','😿'],
      draw: ['🤝','⚖️','😐','🎭']
    };
    const pick = emojiMap[type][Math.floor(Math.random() * emojiMap[type].length)];
    emoji.textContent = pick;

    titleEl.textContent = title;
    subEl.textContent = sub || '';

    // الإحصائيات
    statsEl.innerHTML = '';
    if(stats){
      stats.forEach(s => {
        const div = document.createElement('div');
        div.className = 'result-stat ' + (s.cls || '');
        div.innerHTML = `<div class="label">${s.label}</div><div class="value">${s.value}</div>`;
        statsEl.appendChild(div);
      });
    }

    // MMR
    if(mmr){
      mmrEl.classList.remove('hidden');
      $('mmrDelta').textContent = (mmr.delta >= 0 ? '+' : '') + mmr.delta;
      $('mmrDelta').classList.toggle('neg', mmr.delta < 0);
      $('mmrNew').textContent = mmr.newMmr;
      $('mmrRank').textContent = mmr.rank.icon + ' ' + mmr.rank.name;
    } else {
      mmrEl.classList.add('hidden');
    }

    // المكافآت
    if(rewards && rewards.length){
      rewardsEl.classList.remove('hidden');
      $('rewardItems').innerHTML = rewards.map(r =>
        `<div class="reward-item">${r.icon} ${r.text}</div>`
      ).join('');
    } else {
      rewardsEl.classList.add('hidden');
    }

    // الأزرار
    const rematchBtn = $('rematchBtn');
    const againBtn = $('resultPlayAgain');
    const homeBtn = $('resultHome');

    // إعادة تعيين المستمعين
    const newRematch = rematchBtn.cloneNode(true);
    const newAgain = againBtn.cloneNode(true);
    const newHome = homeBtn.cloneNode(true);
    rematchBtn.parentNode.replaceChild(newRematch, rematchBtn);
    againBtn.parentNode.replaceChild(newAgain, againBtn);
    homeBtn.parentNode.replaceChild(newHome, homeBtn);

    newRematch.addEventListener('click', () => { Audio.sfx.click(); onRematch && onRematch(); });
    newAgain.addEventListener('click', () => { Audio.sfx.click(); onAgain && onAgain(); });
    newHome.addEventListener('click', () => { Audio.sfx.click(); onHome && onHome(); });

    // الجزيئات
    particlesEl.innerHTML = '';
    if(type === 'win') spawnConfetti(particlesEl, 100);
    else if(type === 'lose') spawnRain(particlesEl, 30);
    else spawnNeutral(particlesEl, 40);

    // عرض
    showScreen('resultScreen');
  }

  /* ============ Confetti (فوز) ============ */
  function spawnConfetti(container, count){
    const colors = ['#00e5ff','#ff00e5','#00ff9d','#ff5f6d','#ffd700','#fff','#ff9500'];
    for(let i=0;i<count;i++){
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random()*100 + '%';
      c.style.top = '-20px';
      c.style.width = (6 + Math.random()*8) + 'px';
      c.style.height = (6 + Math.random()*8) + 'px';
      c.style.background = colors[Math.floor(Math.random()*colors.length)];
      c.style.animationDelay = (Math.random()*1.2) + 's';
      c.style.animationDuration = (2.5 + Math.random()*2) + 's';
      if(Math.random() > 0.5) c.style.borderRadius = '50%';
      container.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
  }

  /* ============ Rain (خسارة) ============ */
  function spawnRain(container, count){
    for(let i=0;i<count;i++){
      const drop = document.createElement('div');
      drop.className = 'confetti';
      drop.style.left = Math.random()*100 + '%';
      drop.style.top = '-20px';
      drop.style.width = '2px';
      drop.style.height = (12 + Math.random()*12) + 'px';
      drop.style.background = 'rgba(150,180,220,.6)';
      drop.style.borderRadius = '2px';
      drop.style.animationDelay = (Math.random()*2) + 's';
      drop.style.animationDuration = (1.5 + Math.random()*1) + 's';
      container.appendChild(drop);
      setTimeout(() => drop.remove(), 4000);
    }
  }

  /* ============ Neutral sparkles (تعادل) ============ */
  function spawnNeutral(container, count){
    for(let i=0;i<count;i++){
      const s = document.createElement('div');
      s.className = 'confetti';
      s.style.left = Math.random()*100 + '%';
      s.style.top = Math.random()*100 + '%';
      s.style.width = '6px';
      s.style.height = '6px';
      s.style.background = '#a0a0ff';
      s.style.borderRadius = '50%';
      s.style.boxShadow = '0 0 15px #a0a0ff';
      s.style.animation = 'pulse 2s ease-in-out infinite';
      s.style.animationDelay = (Math.random()*2) + 's';
      container.appendChild(s);
    }
  }

  return { show };
})();