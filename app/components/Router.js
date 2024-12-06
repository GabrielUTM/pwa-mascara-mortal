import { DetallesVideojuego } from "./DetallesVideojuego.js";
import { InicioContent } from "./InicioContent.js";
import {PersonajesCard} from './PersonajesCard.js';

export function Router() {
    const d = document,
    w = window,
    $main = d.getElementById("main")
    let {hash} = location

    console.log(hash);
    
    if (!hash || hash === "#/") {
        $main.appendChild(InicioContent())
    }
    else if (hash === "#/detalles-videojuego.html") {
        $main.appendChild(DetallesVideojuego())
        const $personajesContainer = d.getElementById("personajes")
        $personajesContainer.insertAdjacentElement("beforeend", PersonajesCard())

    }
}