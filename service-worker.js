var cacheName = 'featurePwaCache-1';
var filesToCache = [
   '/features/',
  '/features/index.html'
];
// I am new sevice worker 2
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  console.log('requestt',e.request);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('https://suryaphani1729.github.io/features/');
    notification.close();
  }
});

self.addEventListener('push', function(e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: './features/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Open',
        icon: './features/logo.png'},
      {action: 'close', title: 'Close',
        icon: './features/logo.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Welcome to features app!', options)
  );
});
