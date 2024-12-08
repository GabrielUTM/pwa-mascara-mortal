const CACHE_NAME = "mascara-mortal-pwa-cache-v1";

const urlsToCache = [
  "../index.html",
  "./App.js",
  "./index.js",
  "./assets/css/style.css",
  "./assets/images/SANTOS.jpg",
  "./assets/images/1.png",
  "./assets/images/2.png",
  "./assets/images/3.png",
  "./assets/images/4.png",
];

// Evento de instalación
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Abriendo caché");
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento de activación
self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
});

// evento de fetch para interceptar solicitudes y servir desde caché
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
