// Get business parameters from URL
const urlParams = new URLSearchParams(self.location.search);
const businessId = urlParams.get('business') || 'default';
const businessSlug = urlParams.get('slug') || 'default';
const version = urlParams.get('v') || '1';
const CACHE_NAME = `vcard-${businessSlug}-${businessId}-v${version}`;

// Essential assets to cache for offline functionality
const assets = [
    '/',
    '/manifest.json',
];

self.addEventListener('install', installEvent => {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets).catch(err => {
                return Promise.resolve();
            });
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName.startsWith(`vcard-${businessSlug}-`) && cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function(event) {
    // Only handle GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            
            return fetch(event.request).then(function(response) {
                // Cache successful responses
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            }).catch(function() {
                // Return offline page or basic response if available
                return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
            });
        })
    );
});

self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});