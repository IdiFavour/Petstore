var cacheName = 'petstore-v1'
var cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    'images/product.png',
    'images/icon-store-512.png',
    'images/bg.jpg',
    'css/todo.css'
]


self.addEventListener('install', (e) => {
    console.log('[Service Worker] install')
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files')
            return cache.addAll(cacheFiles)
        })
    )
})