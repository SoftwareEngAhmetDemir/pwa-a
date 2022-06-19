const staticDevCoffee = "ahmed"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/1.jpeg",
  "/images/3.jpeg",
  "/images/2.webp",
]

self.addEventListener("install", async installEvent => {
 await installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", async fetchEvent => {
   await fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })


  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async function() {
    await  navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  