const CACHE_NAME = 'artikai-static-v1';
const ASSET_CACHE = 'artikai-runtime-v1';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/thumbnail.jpg',
  '/favicon.png',
  '/icons/favicon-192x192.png',
  '/icons/favicon-512x512.png',
  '/icons/apple-touch-icon-180x180.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .catch(() => undefined),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => (key === CACHE_NAME || key === ASSET_CACHE ? undefined : caches.delete(key)))),
      ),
  );
  self.clients.claim();
});

const STATIC_ASSET_REGEX = /\.(?:js|css|png|jpg|jpeg|svg|gif|webp|webm|mp4|mp3|woff2?|ttf|eot|ico)$/i;

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/', copy)).catch(() => undefined);
          return response;
        })
        .catch(() => caches.match('/index.html')),
    );
    return;
  }

  if (url.origin === self.location.origin && STATIC_ASSET_REGEX.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }
        return fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(ASSET_CACHE).then((cache) => {
              if (response.ok) {
                cache.put(request, copy);
              }
            });
            return response;
          })
          .catch(() => caches.match(request));
      }),
    );
    return;
  }

  // Default network-first for cross-origin GETs.
  event.respondWith(
    fetch(request).catch(() => caches.match(request)),
  );
});
