export function Header() {
  const $header = document.createElement("header");
  const $nav = document.createElement("div");
  $header.classList.add("banner-section-outer");
  $nav.classList.add("container-fluid", "px-5");
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
                                <a class="nav-link" href="#/detalles-videojuego">Acerca del videojuego</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/otros-videojuegos">Otros videojuegos</a>
                            </li>
                            <li class="m-0">
                                <a class="navbar-brand d-flex justify-content-center" href="#/">
                                    <figure class="mb-0 figure__logo"><img src="app/assets/images/zomtek.png"
                                            alt="logo" class="header__img"></figure>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/contacto">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/niveles-juego">Niveles del juego</a>
                            </li>
                        </ul>
                    </div>
                </nav>
    `;
    $header.appendChild($nav)
  return $header;
}
