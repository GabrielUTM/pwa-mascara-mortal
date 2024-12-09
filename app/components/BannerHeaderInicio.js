export function BannerHeaderInicio() {

  const $bannerSection = document.createElement("section");
  $bannerSection.classList.add("banner-section");
  $bannerSection.innerHTML = `  
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
    `;

  return $bannerSection;
}
