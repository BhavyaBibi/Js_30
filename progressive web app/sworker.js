self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(['./', "./style.css", "./images/logo65.png", "./images/logo512.png"])

        })
    )
})
self.addEventListener("fetch", e => {
    e.responseWidth(
        caches.match(e.request).then(Response => {
            return response || fetch(e.request)
        })
    )
})