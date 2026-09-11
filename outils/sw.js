// Service worker de l'outil "Fiche d'Exploitation Journalière" — The World's-SHOP.
// Stratégie : réponse depuis le cache si disponible (rapide + hors-ligne),
// tout en rafraîchissant le cache en arrière-plan (stale-while-revalidate).
var CACHE_NAME = 'worldsshop-fiche-v1';
var PRECACHE_URLS = [
  '/outils/fiche-exploitation-journaliere/',
  '/outils/manifest.webmanifest',
  '/assets/imgs/pwa/fiche-icon-192.png',
  '/assets/imgs/pwa/fiche-icon-512.png'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(PRECACHE_URLS); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event){
  if(event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function(cached){
      var fetchPromise = fetch(event.request).then(function(networkResponse){
        if(networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')){
          var copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        }
        return networkResponse;
      }).catch(function(){ return cached; });
      return cached || fetchPromise;
    })
  );
});
