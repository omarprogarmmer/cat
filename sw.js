const CACHE_NAME = 'edu-app-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/icon-72.png',
  '/icon-192.png',
  '/icon-512.png'
];

// تثبيت Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// إستراتيجية Cache First
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(cachedResponse => cachedResponse || fetch(e.request))
  );
});