import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { PersonajesCard } from "./components/PersonajesCard.js";

export function App() {
  const d = document,
    $header = d.getElementById("header"),
    $footer = d.getElementById("footer"),
    currentPath = `.${window.location.pathname}`;
  console.log(currentPath);

  $header.appendChild(Header(currentPath));
  $footer.appendChild(Footer());

  if (currentPath == "./detalles-videojuego.html") {
    const personajesContainer = d.getElementById("personajes");
    personajesContainer.appendChild(PersonajesCard());
  }
}
