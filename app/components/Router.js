import { InicioContent } from "./InicioContent.js";

export function Router() {
    const d = document,
    w = window,
    $main = d.getElementById("main")
    let {hash} = location

    console.log(hash);
    
    if (!hash || hash === "#/") {
        $main.appendChild(InicioContent())
    }
}