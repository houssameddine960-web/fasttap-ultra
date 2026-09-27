// FastTap Ultra 4.2 — Optional high-quality assets loader
// These large assets can be loaded on demand for enhanced graphics/audio.
(function(){
  const ASSETS_BASE = '/assets/';
  window.FastTapAssets = {
    version: '4.2.0',
    loadImagePack: function(){ return fetch(ASSETS_BASE + 'images/bg_hd.raw'); },
    loadAudioPack: function(){ return fetch(ASSETS_BASE + 'audio/sfx_pack.raw'); },
    loadData: function(name){ return fetch(ASSETS_BASE + 'data/' + name); },
    list: function(){ return fetch(ASSETS_BASE + 'index.json').then(r=>r.json()); }
  };
})();
