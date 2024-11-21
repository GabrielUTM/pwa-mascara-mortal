import { Footer } from "./components/Footer.js"
import { Header } from "./components/Header.js"

export function App(){
    const d = document,
    $header = d.getElementById("header"), 
    $footer = d.getElementById("footer"),
    currentPath = window.location.pathname; 

    $header.appendChild(Header(currentPath))
    $footer.appendChild(Footer())
    
}