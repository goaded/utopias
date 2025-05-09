importScripts('file:///media/archive/Utopia-main.zip/Utopia-main/main/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
