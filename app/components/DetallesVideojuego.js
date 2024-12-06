export function DetallesVideojuego() {
  const $detallesVideojuegos = document.createElement("div");
  $detallesVideojuegos.classList.add("popular_games_section");
  $detallesVideojuegos.innerHTML = `
     <h2 class="my-4 py-2" data-aos="fade-up">Historia Principal</h2>
        <div class="container text-justify">
            <div class="row" data-aos="fade-right">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>En un Sahuayo postapocalíptico, "ElSantos" debe enfrentarse a hordas de zombies para encontrar
                        al Doctor C, el
                        científico que liberó un virus que convirtió a la población en monstruos. Cada vez que juegues,
                        los niveles serán
                        diferentes, y si pierdes, tendrás que empezar de nuevo, lo que hace que el juego sea más
                        emocionante y desafiante.</p>
                </div>
            </div>
            <div class="row" data-aos="fade-right">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>El juego se desarrolla en el municipio de Sahuayo, Michoacán, que ha sido devastado por un virus
                        liberado por el malvado
                        "Doctor C." El virus transforma a los habitantes en zombies feroces, conocidos como los "Zombies
                        de Sahuayo". El
                        protagonista es "El Santos", una parodia del icónico personaje de la película animada. El Santos
                        deberá recorrer los
                        caóticos y oscuros escenarios de Sahuayo y otras regiones, derrotando hordas de zombies y
                        superando diversos retos para
                        encontrar al Doctor C y obtener el antídoto que revertirá la transformación de la gente.</p>
                </div>
            </div>
            <div class="row" data-aos="fade-right">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>El jugador avanza a través de diferentes escenarios, disparando a oleadas de zombies,
                        recolectando recursos y
                        encontrando ítems aleatorios que regeneran su vida o mejoran sus defensas. los niveles
                        cambiarán, por lo que nunca será
                        igual. El jugador también podrá ganar puntos eliminando zombies y con esos puntos podrá comprar
                        nuevas armas o mejoras.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="live_stream_section">
        <div class="container" id="personajes">
            <div class="row" data-aos="fade-up">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2>Personajes Principales del juego</h2>
                </div>
            </div>
        </div>
    </section>

    <!-- BLOG POSTS SECTION -->
    <section class="blog_posts_section">
        <div class="container">
            <div class="row" data-aos="fade-up">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2>Inspiración</h2>
                </div>
            </div>
            <div class="row" data-aos="fade-up">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="blog_posts_content padding_bottom">
                        <div class="upper_portion">
                            <figure class="mb-0 figure__inspiracion"><img src="./app/assets/images/SANTOS.jpg"
                                    alt="Imagen inspiracion" class="img__inspiracion mx-auto"></figure>
                        </div>
                        <div class="lower_portion_wrapper mx-auto">
                            <div class="lower_portion">
                                <div class="span_wrapper text__subitulo">
                                    <span> FPS | Survival Horror
                                    </span>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal"
                                    data-target="#blog-model-1">
                                    <p class="mb-0">El personaje principal del juego y la temática del juego en general
                                        son una parodia de la pelicula: EL Santos vs la voluptuosa Mendoza </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

  return $detallesVideojuegos;
}
