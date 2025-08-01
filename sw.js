const cacheName = "offline-app-v1";
const filesToCache = [
  "index.html",
  "manifest.json",
  "icon.png"
];

// تثبيت الخدمة وتخزين الملفات
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// جلب الملفات من الكاش أو الشبكة
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
