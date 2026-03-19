const CACHE_NAME = 'yawm-v3';
const PRECACHE = [
  './',
  './index.html',
  './css/phone.css',
  './css/exercises.css',
  './css/animations.css',
  './js/app.js',
  './js/router.js',
  './js/state.js',
  './js/audio.js',
  './js/data/lessons.js',
  './js/data/units.js',
  './js/data/lesson-intros.js',
  './js/screens/units.js',
  './js/screens/lessons.js',
  './js/screens/exercise.js',
  './js/exercises/ayah-assembly.js',
  './js/exercises/cold-read.js',
  './js/exercises/fill-the-gap.js',
  './js/exercises/listen.js',
  './js/exercises/meaning-match.js',
  './js/exercises/root-discovery.js',
  './js/exercises/tap-to-translate.js',
  './js/exercises/transform-predict.js',
  './js/exercises/word-spotlight.js',
  './js/exercises/ayah-scanner.js',
  './js/exercises/listen-and-identify.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Network-first for fonts, cache-first for everything else
  if (e.request.url.includes('fonts.googleapis.com') || e.request.url.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        fetch(e.request).then(res => {
          cache.put(e.request, res.clone());
          return res;
        }).catch(() => cache.match(e.request))
      )
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
