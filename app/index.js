import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./app/service-worker.js")
    .then(function (registration) {
      console.log("Service worker registrado con exito:", registration);
    })
    .catch(function (error) {
      console.log("Error al registrar el service worker:", error);
    });
}

window.addEventListener("hashchange", App);
