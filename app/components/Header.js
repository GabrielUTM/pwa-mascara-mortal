import { BannerHeaderInicio } from "./BannerHeaderInicio.js";
export function Header() {
  const $header = document.createElement("header");
  const $nav = document.createElement("div");
  $header.classList.add("banner-section-outer");
  $nav.classList.add("container-fluid", "px-3");
  $nav.innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html">
                        <figure class="mb-0"><img src="./app/assets/images/zomtek.png" alt="Logo"></figure>
                    </a>
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/detalles-videojuego.html">Acerca del videojuego</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/otros-videojuegos.html">Otros videojuegos</a>
                            </li>
                            <li class="m-0">
                                <a class="navbar-brand d-flex justify-content-center" href="index.html">
                                    <figure class="mb-0 figure__logo"><img src="app/assets/images/zomtek.png"
                                            alt="logo" class="header__img"></figure>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Historia del juego</a>
                            </li>
                            <li class="nav-item mr-1 ml-0">
                                <a class="nav-link login_btn" href="login.html">Iniciar Sesion</a>
                            </li>
                            <li class="nav-item ml-0">
                                <a class="nav-link signup_btn" href="signup.html">Registrate</a>
                            </li>
                        </ul>
                    </div>
                </nav>
    `;
    $header.appendChild($nav)
  return $header;
}