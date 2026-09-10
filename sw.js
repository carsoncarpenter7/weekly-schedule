// Recomp Schedule — offline service worker.
// NETWORK-FIRST for the app shell: this app is under active development, so
// a fresh deploy must always win when you're online. The old cache-first
// strategy served whatever was cached INSTANTLY on every load and only
// updated the cache silently "for next time" — which never actually
// arrived, since next time did the same thing. The cache now exists purely
// as an offline fallback, not a stale-serving mechanism.
const CACHE = 'recomp-shell-v106'; // bumped — hub permanent pins + chrono + logging
const SHELL = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './personal/load-personal.js',
  './personal/personal-profile.example.js',
  './personal/historical-seeds.example.js',
  './personal/personal-profile.js',
  './personal/historical-seeds.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Lets the page force an already-installed-but-waiting SW to activate
// immediately, instead of waiting for every tab to fully close first.
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isSameOrigin = new URL(e.request.url).origin === location.origin;
  if (isSameOrigin) {
    // App shell: always try the network first so code changes land the
    // moment you're online. Cache only kicks in when offline.
    e.respondWith(
      fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // Cross-origin (fonts, etc.) — cache-first is fine, these rarely change.
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }))
    );
  }
});
