export function Footer() {
  const $footer = document.createElement("div");
  $footer.classList.add("container");

  $footer.innerHTML = `
            <div class="middle-portion">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <ul class="links mb-0 list-unstyled">
                            <li><a href="./index.html">Inicio</a></li>
                            <li><a href="./detalles-videojuego.html">Acerca del videojuego</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <ul class="mb-2 list-unstyled">
                            <li><a href="index.html">
                                    <figure class="mb-0"><img src="app/assets/images/footer_logo.png" alt=""></figure>
                                </a></li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <ul class="mb-0 list-unstyled neg_margin">
                            <li class="links"><a href="match_detail.html">Informacion del juego.</a></li>
                            <li class="icons"><a href="#"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                            </li>
                            <li class="icons"><a href="#"><i class="fa-brands fa-linkedin-in"
                                        aria-hidden="true"></i></a></li>
                            <li class="icons"><a href="#"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-portion">
            <div class="copyright col-xl-12">
                <p>Mascara Mortal - Apocalipsis Zombie, 2024, . Todos los derechos reservados.</p>
            </div>`;
  return $footer;
}
