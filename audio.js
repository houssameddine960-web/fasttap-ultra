const Audio = (() => {
  let ctx = null;
  let musicNodes = null;
  let settings = { sfx: true, music: 'calm' };

  function init(){
    if(!ctx){ try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} }
    if(ctx && ctx.state === 'suspended') ctx.resume();
  }

  function tone({freq=440, dur=0.08, type='sine', vol=0.1, attack=0.005, release=0.05, sweep=null}){
    if(!settings.sfx || !ctx) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, ctx.currentTime);
    if(sweep) o.frequency.exponentialRampToValueAtTime(sweep, ctx.currentTime + dur);
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(vol, ctx.currentTime + attack);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur + release);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + dur + release + 0.02);
  }

  const sfx = {
    tapP1: () => tone({freq: 800 + Math.random()*200, dur:0.03, type:'square', vol:0.06}),
    tapP2: () => tone({freq: 600 + Math.random()*200, dur:0.03, type:'square', vol:0.06}),
    click: () => tone({freq: 700, dur:0.04, type:'triangle', vol:0.08}),
    back: () => tone({freq: 500, dur:0.08, type:'triangle', vol:0.1, sweep: 350}),
    countdown: (n) => tone({freq: 400 + (5-n)*100, dur:0.15, type:'sine', vol:0.15}),
    go: () => {
      tone({freq: 600, dur:0.1, type:'sine', vol:0.15, sweep: 1200});
      setTimeout(()=>tone({freq: 1200, dur:0.2, type:'sine', vol:0.12, sweep: 1600}), 100);
    },
    win: () => {
      [523,659,784,1046,1318].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.25, type:'triangle', vol:0.16}), i*100));
    },
    lose: () => {
      [400,350,300,250,200].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.3, type:'sawtooth', vol:0.12}), i*150));
    },
    draw: () => {
      [500,600,500].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.25, type:'sine', vol:0.12}), i*180));
    },
    achievement: () => {
      [784,988,1175,1568].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.18, type:'triangle', vol:0.15}), i*90));
    },
    levelUp: () => {
      [523,659,784,1046,1318].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.22, type:'sine', vol:0.16}), i*100));
    },
    warn: () => tone({freq: 900, dur:0.08, type:'square', vol:0.08}),
    combo: (n) => tone({freq: 800 + n*100, dur:0.12, type:'triangle', vol:0.12}),
    matchFound: () => {
      [660,880,1100].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.15, type:'triangle', vol:0.14}), i*120));
    },
    boxOpen: () => {
      [400,600,800,1000,1400].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.15, type:'triangle', vol:0.15}), i*80));
    },
    coin: () => tone({freq: 1200, dur:0.1, type:'sine', vol:0.1, sweep: 1600}),
    msg: () => tone({freq: 1000, dur:0.05, type:'sine', vol:0.06}),
    mmrUp: () => {
      [500,700,900,1200].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.15, type:'sine', vol:0.14}), i*90));
    },
    mmrDown: () => {
      [900,700,500,300].forEach((f,i)=>setTimeout(()=>tone({freq:f, dur:0.18, type:'sine', vol:0.12}), i*110));
    }
  };

  function startMusic(mode){
    stopMusic();
    if(mode === 'off' || !ctx) return;
    const presets = {
      calm:    { base:[220,277,330], type:'sine',     vol:0.02, lfo:0.5, depth:4 },
      normal:  { base:[261,329,392], type:'triangle', vol:0.028, lfo:1,  depth:8 },
      intense: { base:[329,415,493], type:'sawtooth', vol:0.035, lfo:4,  depth:20 },
      epic:    { base:[196,261,329,392], type:'triangle', vol:0.03, lfo:2, depth:15 }
    };
    const preset = presets[mode] || presets.calm;
    const masterGain = ctx.createGain();
    masterGain.gain.value = preset.vol;
    masterGain.connect(ctx.destination);

    const nodes = [];
    preset.base.forEach((freq, i) => {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = preset.type;
      o.frequency.value = freq;
      g.gain.value = 1 / preset.base.length;
      o.connect(g); g.connect(masterGain);
      const lfo = ctx.createOscillator(); const lfoG = ctx.createGain();
      lfo.frequency.value = preset.lfo + i * 0.13;
      lfoG.gain.value = preset.depth;
      lfo.connect(lfoG); lfoG.connect(o.frequency);
      o.start(); lfo.start();
      nodes.push({ o, lfo, g });
    });

    const delay = ctx.createDelay();
    delay.delayTime.value = 0.35;
    const fb = ctx.createGain(); fb.gain.value = 0.3;
    delay.connect(fb); fb.connect(delay);
    masterGain.connect(delay); delay.connect(ctx.destination);

    musicNodes = { nodes, masterGain, delay };
  }

  function stopMusic(){
    if(!musicNodes) return;
    try{
      musicNodes.nodes.forEach(n => { n.o.stop(); n.lfo.stop(); });
      musicNodes.masterGain.disconnect();
      musicNodes.delay.disconnect();
    }catch(e){}
    musicNodes = null;
  }

  function setSettings(s){
    settings = { ...settings, ...s };
    if(musicNodes) startMusic(settings.music);
  }

  return { init, sfx, startMusic, stopMusic, setSettings };
})();