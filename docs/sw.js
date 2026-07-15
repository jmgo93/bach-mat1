const CACHE_NAME = "mate1-interactivas-v21";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./assets/css/styles.css",
  "./assets/js/generated-content.js",
  "./assets/js/generated-supplements.js",
  "./assets/js/activity-bank.js",
  "./assets/js/quiz-bank.js",
  "./assets/js/app.js",
  "./manifest.webmanifest",
  "./assets/icons/icon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];
const OPTIONAL_ASSETS = [
  "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        await cache.addAll(CORE_ASSETS);
        await Promise.allSettled(OPTIONAL_ASSETS.map((asset) => cache.add(asset)));
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", networkResponse.clone()));
          return networkResponse;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkRequest = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse.ok || networkResponse.type === "opaque") {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse.clone()));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse || new Response("Recurso no disponible sin conexion.", { status: 503 }));
      return cachedResponse || networkRequest;
    })
  );
});
