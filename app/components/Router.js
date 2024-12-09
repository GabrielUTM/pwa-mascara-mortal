import { DetallesVideojuego } from "./DetallesVideojuego.js";
import { GameCards } from "./GameCards.js";
import { BannerHeaderInicio } from "./BannerHeaderInicio.js";
import { InicioContent } from "./InicioContent.js";
import { MainBanner } from "./MainBanner.js";
import { PersonajesCard } from "./PersonajesCard.js";
import { Contacto } from "./Contacto.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main"),
    $header = d.querySelector("header"),
    navLinks = d.querySelectorAll(".nav-link");
  let { hash } = location;

  // manejo de rutas a traves de hash para servir contenido
  if (!hash || hash === "#/") {
    navLinks[0].parentElement.classList.add("active")
    $header.appendChild(BannerHeaderInicio());
    $main.appendChild(InicioContent());
  } else if (hash === "#/detalles-videojuego.html") {
    $header.appendChild(MainBanner("Acerca del videojuego"));
    $main.appendChild(DetallesVideojuego());
    // obtener contenedor donde se van a desplegar los personajes
    const $personajesContainer = d.getElementById("personajes");
    $personajesContainer.insertAdjacentElement("beforeend", PersonajesCard());
  } else if (hash === "#/otros-videojuegos.html") {
    $header.appendChild(MainBanner("Otros videojuegos que podrían gustarte"));
    $main.appendChild(await GameCards());
  }else if (hash === "#/contacto") {
    $header.appendChild(MainBanner("Contactanos"))
    $main.appendChild(Contacto())
  }

  // Agregar y quitar clase actives de los enlaces
  navLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
  });
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === hash) {
      link.parentElement.classList.add("active");
    }
  });
}
