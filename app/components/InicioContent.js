export function InicioContent() {
  const $inicio = document.createElement("div");
  $inicio.innerHTML = `
    <!-- contenido de index -->    
    <!-- GAMING TOURNAMENTS SECTION -->
    <section class="gaming_tournament-section">
        <div class="container">
            <div class="row" data-aos="fade-up">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-md-0 pr-sm-none">
                    <div class="gaming_tournament_image">
                        <figure class="mb-0 gaming_tournament_image-figure">
                            <img class="img-fluid gaming_tournament_image"
                                src="./app/assets/images/portada-mascara-mortal.png" alt="portada de juego">
                        </figure>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-md-0 pl-sm-none">
                    <div class="gaming_tournament_content">
                        <h2 class="text-left mb-md-5">Mascara Mortal Apocalipsis Zombie</h2>
                        <p class="sub_p pt-md-3 text-justify">
                            Un irreverente héroe lucha por sobrevivir en una ciudad infectada, enfrentando hordas de
                            zombies mientras busca al
                            villano que liberó el virus.
                        </p>
                        <p class="sub_p mb-4 d-lg-block d-none">
                            El jugador toma el control de "El Santos", quien debe sobrevivir en una versión apocalíptica
                            de Sahuayo, Michoacán.
                        </p>
                        <div class="btn_wrapper">
                            <a class="text-decoration-none readmore_btn" href="#/detalles-videojuego">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    `;

  return $inicio;
}
