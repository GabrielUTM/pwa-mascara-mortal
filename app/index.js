import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});
window.addEventListener("hashchange", App);
