const CACHE_NAME = "mascara-mortal-pwa-cache-v1";
const API_CACHE_NAME = "api-cache";

const urlsToCache = [
  // rutas relativas al archivo service-worker
  "../index.html",
  "./App.js",
  "./index.js",
  "./assets/css/style.css",
  "./assets/css/special_classes.css",
  "./assets/css/mediaqueries.css",
  "./assets/bootstrap/js/bootstrap.min.js",
  "./assets/bootstrap/js/jquery-3.6.0.min.js",
  "./assets/bootstrap/js/custom.js",
  "./assets/bootstrap/css/bootstrap.min.css",
  "./assets/images/SANTOS.jpg",
  "./assets/images/1.png",
  "./assets/images/2.png",
  "./assets/images/3.png",
  "./assets/images/bean-eater-s.svg",
  "./assets/images/4.png",
  "./assets/images/sub_banner_background.png",
  "./assets/images/live_stream_background.jpg",
  "./assets/images/gaming_tournament_background.jpg",
  "./assets/images/popular_games_background.png",
  "./assets/images/about_video_logos_background.jpg",
  "./helpers/api_requests.js",
  "./components/GameCards.js",
  "./components/Router.js",
  // Rutas externas
  "https://mmo-games.p.rapidapi.com",
  "https://www.mmobomb.com",
  "https://cdnjs.cloudflare.com",
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

self.addEventListener("fetch", (event) => {
  const requestURL = new URL(event.request.url);

  // Manejar las solicitudes de la API
  if (requestURL.hostname === "mmo-games.p.rapidapi.com") {
    event.respondWith(
      caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((response) => {
            // Guarda una copia de la respuesta en caché
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => {
            // Devuelve la respuesta desde la caché si está disponible
            return cache.match(event.request);
          });
      })
    );
  } else {
    // Manejo estándar para otras solicitudes
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
