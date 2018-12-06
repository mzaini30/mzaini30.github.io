var CACHE_NAME = 'zen-cache';
var urlsToCache = [
    '/bin/bootstrap/css/bootstrap.min.css',
    '/bin/bootstrap/js/bootstrap.min.js',
    // '/bin/pygment/default.css',
    '/bin/jquery.min.js',
    '/bin/lunr.min.js',
    '/bin/ResizeSensor.min.js',
    '/bin/theia-sticky-sidebar.min.js',
    '/gambar/404.png',
    '/favicon.ico',
    '/messenger.png',
    '//twemoji.maxcdn.com/2/twemoji.min.js?11.2'
    // '/gambar/play store.png'
];
console.log('loading sw');

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('installing sw');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                var x = cache.addAll(urlsToCache);
                console.log('cache added');
                return x;
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

importScripts('https://cdn.pushassist.com/account/assets/service-workers/mzaini30-service-worker.js');