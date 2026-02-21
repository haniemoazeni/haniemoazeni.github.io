const CACHE_NAME = 'portfolio-cache-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/assets/images/port-1.png',
  '/assets/images/port-2.png',
  '/assets/images/port-3.png',
  '/assets/images/port-4.png',
  '/assets/Hanie Moazeni_CV_design.pdf',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
    ))
  );
});

// Stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});


