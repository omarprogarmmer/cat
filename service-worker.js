const CACHE_NAME = 'my-educational-app-v1';
const urlsToCache = [
  '/index.html',
  '/index.html',
  'مكتبة.jpg',
  // أضف هنا جميع الملفات التي تريد تخزينها للعمل بدون إنترنت
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});