export function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList.add("footer-section");
  const $container = document.createElement("div");
  $container.classList.add("container");

  $container.innerHTML = `
            <div class="middle-portion">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <ul class="links mb-0 list-unstyled">
                            <li><a href="#/">Inicio</a></li>
                            <li><a href="#/detalles-videojuego">Acerca del videojuego</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <ul class="mb-2 list-unstyled">
                            <li><a href="#">
                                    <figure class="mb-0"><img src="app/assets/images/favicon/favicon-96x96.png" alt=""></figure>
                                </a></li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <ul class="mb-0 list-unstyled neg_margin">
                            <li class="links"><a href="#/niveles-juego">Niveles del juego.</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-portion">
            <div class="copyright col-xl-12">
                <p>Mascara Mortal - Apocalipsis Zombie, 2024, . Todos los derechos reservados.</p>
            </div>`;
  $footer.appendChild($container);
  return $footer;
}
