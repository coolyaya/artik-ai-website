const CACHE_NAME = 'artikai-static-v2';
const ASSET_CACHE = 'artikai-runtime-v2';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/thumbnail.webp',
  '/icons/favicon-16x16.webp',
  '/icons/favicon-32x32.webp',
  '/icons/favicon-48x48.webp',
  '/icons/favicon-64x64.webp',
  '/icons/favicon-96x96.webp',
  '/icons/favicon-128x128.webp',
  '/icons/favicon-180x180.webp',
  '/icons/favicon-192x192.webp',
  '/icons/favicon-256x256.webp',
  '/icons/favicon-384x384.webp',
  '/icons/favicon-512x512.webp',
  '/icons/apple-touch-icon-120x120.webp',
  '/icons/apple-touch-icon-152x152.webp',
  '/icons/apple-touch-icon-167x167.webp',
  '/icons/apple-touch-icon-180x180.webp',
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

const STATIC_ASSET_REGEX = /\.(?:js|css|png|jpg|jpeg|svg|gif|webp|woff2?|ttf|eot|ico)$/i;

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
          caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', copy)).catch(() => undefined);
          return response;
        })
        .catch(() => caches.match('/index.html')),
    );
    return;
  }

  const isMedia = request.destination === 'video' || request.destination === 'audio';

  if (url.origin === self.location.origin && STATIC_ASSET_REGEX.test(url.pathname) && !isMedia) {
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
