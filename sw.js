const CACHE_NAME = 'pdic-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/dictionary_part1.txt',
  '/dictionary_part2.txt',
  '/dictionary_part3.txt',
  '/dictionary_part4.txt'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

