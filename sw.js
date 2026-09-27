
const CACHE = 'fasttap-ultra-web-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/style.css',
  '/style-extras.css',
  '/script.js',
  '/online.js',
  '/ui.js',
  '/audio.js',
  '/web.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Never cache Socket.IO traffic.
  if (new URL(req.url).pathname.startsWith('/socket.io/')) return;

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(cache => cache.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('/index.html')))
  );
});
