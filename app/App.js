import { Footer } from "./components/Footer.js"
import { Header } from "./components/Header.js"
import { Loader } from "./components/Loader.js"

export function App(){
    const d = document,
    $header = d.getElementById("header"), 
    $footer = d.getElementById("footer")

    $header.appendChild(Header())
    $footer.appendChild(Footer())
}