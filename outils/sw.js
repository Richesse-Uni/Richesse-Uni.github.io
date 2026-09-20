// Service worker de l'outil "Fiche d'Exploitation Journalière" — The World's-SHOP.
// Stratégie : la page HTML (navigation) privilégie toujours le réseau — l'outil évolue
// souvent et un cache-first la garderait figée sur une ancienne version tant que la
// mise à jour du service worker ne s'est pas propagée (particulièrement lent en PWA
// installée sur mobile). Le cache ne sert de secours que hors-ligne.
// Les autres ressources (icônes, manifeste) restent en stale-while-revalidate.
var CACHE_NAME = 'worldsshop-fiche-v4';
var PRECACHE_URLS = [
  '/outils/fiche-exploitation-journaliere/',
  '/outils/manifest.webmanifest',
  '/assets/imgs/pwa/fiche-icon-192.png',
  '/assets/imgs/pwa/fiche-icon-512.png',
  '/assets/imgs/pwa/blp-logo.png'
];
// Bibliothèques externes (CDN) dont la page a besoin même hors-ligne (graphiques, export PDF,
// chiffrement, QR code, code-barres). Mises en cache à part de PRECACHE_URLS : ce sont des
// requêtes cross-origin, et cache.addAll() échoue en bloc (annulant TOUT le précache, y compris
// la page elle-même) si une seule d'entre elles échoue (CORS, blocage réseau…) — chacune est donc
// récupérée en mode 'no-cors' avec son propre repli silencieux.
var CDN_URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.4/chart.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/sjcl/1.0.8/sjcl.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.11.6/JsBarcode.all.min.js'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(PRECACHE_URLS).then(function(){
        return Promise.all(CDN_URLS.map(function(url){
          return fetch(url, { mode: 'no-cors' })
            .then(function(resp){ return cache.put(url, resp); })
            .catch(function(){ /* pas grave : mise en cache au premier chargement en ligne via le fetch handler générique */ });
        }));
      });
    })
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

  if(event.request.mode === 'navigate'){
    event.respondWith(
      fetch(event.request).then(function(networkResponse){
        var copy = networkResponse.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        return networkResponse;
      }).catch(function(){ return caches.match(event.request); })
    );
    return;
  }

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
