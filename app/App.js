import { Footer } from "./components/Footer.js";
import { Header } from "./components/HeaderInicio.js";
import { Main } from "./components/Main.js";
import { MainHeader } from "./components/MainHeader.js";
import { Router } from "./components/Router.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(MainHeader());
  $root.appendChild(Main());
  $root.appendChild(Footer());

  Router();
  AOS.refreshHard();
}
