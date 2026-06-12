const CACHE_NAME = 'writemyfont-cache-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './fontdrawer.js',
  './i18n.js',
  './i18n-ui.js',
  './potrace.js',
  './pressure-drawing.js',
  './cglyphlist.js',
  './sglyphlist.js',
  './jglyphlist.js',
  './GenYoExt3-R.woff',
  './LessonOne-Regular.woff',
  './logo.png',
  './favicon.ico',
  './favicon-32.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && (
          event.request.url.startsWith(self.location.origin) || 
          event.request.url.includes('cdnjs.cloudflare.com') ||
          event.request.url.includes('code.jquery.com') ||
          event.request.url.includes('opentype.js.org') ||
          event.request.url.includes('fonts.googleapis.com') ||
          event.request.url.includes('fonts.gstatic.com')
        )) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch((err) => {
        console.error('Fetch failed:', err);
      });
    })
  );
});
