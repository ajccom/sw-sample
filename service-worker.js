var cacheName = 'offline_test';

self.addEventListener('install', function (event) {
  // 
  event.waitUntil(
    // self.skipWaiting(); // 无需等待，注册成功就激活
    /* caches.open(cacheName).then(function (cache) {
      cache.addAll([
        '/sw-sample/js/script.js',
        '/sw-sample/images/hello.png',
        '//res.wx.qq.com/open/js/jweixin-1.2.0.js'
      ])
    }) */
  )
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log('hit:', event.request.url)
        return response;
      }
      console.log('miss:', event.request.url)
      return fetch(event.request)
    }).catch(function() {
      console.log('missssss:', event.request.url)
      return fetch(event.request)
    })
  )
});

/*
// off line cache 
self.addEventListener('fetch', function(event) {
  // We only want to call event.respondWith() if this is a GET request for an HTML document.
  if (event.request.method === 'GET' &&
      event.request.headers.get('accept').indexOf('text/html') !== -1) {
    console.log('Handling fetch event for', event.request.url);
    event.respondWith(
      fetch(event.request).catch(function(e) {
        console.error('Fetch failed; returning offline page instead.', e);
        return caches.open(OFFLINE_CACHE).then(function(cache) {
          return cache.match(OFFLINE_URL);
        });
      })
    );
  }
});

// fetch then cache response
var response;
var cachedResponse = caches.match(event.request).catch(function() {
  return fetch(event.request);
}).then(function(r) {
  response = r;
  caches.open('v1').then(function(cache) {
    cache.put(event.request, response);
  });  
  return response.clone();
}).catch(function() {
  return caches.match('/sw-test/gallery/myLittleVader.jpg');
});
*/