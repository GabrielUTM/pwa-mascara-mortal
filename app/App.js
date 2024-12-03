import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
// import { personajesCard } from "./components/PersonajesCard.js";

export function App() {
  const d = document,
    $header = d.getElementById("header"),
    $footer = d.getElementById("footer"),
    currentPath = `.${window.location.pathname}`;
    console.log(currentPath);
    

  $header.appendChild(Header(currentPath));
  $footer.appendChild(Footer());

  if (currentPath == "./personajes.html") {
    console.log("personajes funciona");
    personajesCard()
  }
}
