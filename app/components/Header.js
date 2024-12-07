export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("banner-section-outer");

  $header.innerHTML = `  
         <div class="container-fluid px5">
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
        </div>
<<<<<<< HEAD
=======
    </header>
>>>>>>> 1f9a555b5a1d57bd6846d8ed48911215cb54d998
      <!-- BANNER SECTION -->
        <section class="banner-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-lg-left text-center">
                        <div class="banner-section-content">
                            <h1 data-aos="fade-up" class="py-3 my-3">Una experiencia de juego sin igual</h1>
                            <p data-aos="fade-right">Adentrate a una mezcla de acción, terror y comedia</p>
                            <div class="btn_wrapper" data-aos="fade-down">
                                <a class="text-decoration-none readmore_btn" href="match_detail.html">Ver más</a>
                                <a class="text-decoration-none joinus_btn" href="signup.html">Contactanos</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12"></div>
                </div>
            </div>
        </section>
    `;

  return $header;
}
