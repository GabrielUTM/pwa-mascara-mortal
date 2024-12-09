import { DetallesVideojuego } from "./DetallesVideojuego.js";
import { GameCards } from "./GameCards.js";
import { Header } from "./HeaderInicio.js";
import { InicioContent } from "./InicioContent.js";
import { MainHeader } from "./MainHeader.js";
import { PersonajesCard } from "./PersonajesCard.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main"),
    $header = d.querySelector("header");
  let { hash } = location;

  // manejo de rutas a traves de hash para servir contenido
  if (!hash || hash === "#/") {
    $main.appendChild(InicioContent());
  } else if (hash === "#/detalles-videojuego.html") {
    $header.innerHTML = null
    $header.appendChild(MainHeader("Acerca del videojuego"))
    $main.appendChild(DetallesVideojuego());
    // obtener contenedor donde se van a desplegar los personajes
    const $personajesContainer = d.getElementById("personajes");
    $personajesContainer.insertAdjacentElement("beforeend", PersonajesCard());
  } else if (hash === "#/otros-videojuegos.html") {
    $header.innerHTML = null;
    $header.appendChild(MainHeader("otros videojuegos que podrían gustarte"));
    $main.appendChild(await GameCards());
  }
}
