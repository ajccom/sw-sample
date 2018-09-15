var cacheName = 'helloWorld';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      cache.addAll([
        '/sw-sample/js/script.js',
        '/sw-sample/images/hello.png'
      ])
    })
  )
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  )
});