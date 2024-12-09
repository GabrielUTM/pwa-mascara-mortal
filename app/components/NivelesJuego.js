export function NivelesJuegos() {
  const $nivelesJuego = document.createElement("section");
  $nivelesJuego.classList.add("popular_games_section");

  $nivelesJuego.innerHTML = `
            <h2 class="my-4 py-2">Niveles del Juego</h2>
        <div class="container text-justify">
            <div class="row mb-4">

            </div>
            <div class="row">
                <!-- Nivel 1 -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card card__custom shadow-sm h-100">
                        <img src="./app/assets/images/Nivel1.jpeg" class="card-img-top" alt="Nivel 1">
                        <div class="card-body text-center">
                            <h5 class="card-title card-title__custom">Nivel 1: Pueblo</h5>
                            <p class="card-text card-text__custom">Adentrate en el pueblo con la primer dificultad del nivel, cada nivel
                                ira aumentanto la dificultad de los zombies</p>
                                <p class="text-white mt-4 text-left">Dificultad: Fácil</p>
                        </div>
                    </div>
                   
                </div>


                <!-- Nivel 2 -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card card__custom shadow-sm h-100">
                        <img src="./app/assets/images/Nivel2.jpeg" class="card-img-top" alt="Nivel 2">
                        <div class="card-body text-center">
                            <h5 class="card-title card-title__custom">Nivel 2: Las Ruinas Abandonadas</h5>
                            <p class="card-text card-text__custom">Explora las ruinas, un nivel con mas dificultad y adentrandote al
                                ultimo nivel donde te espera el jefe final.</p>
                                <p class="text-white mt-4 text-left">Dificultad: Media</p>
                        </div>
                    </div>
                </div>
                <!-- Nivel 3 -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card card__custom shadow-sm h-100">
                        <img src="./app/assets/images/Nivel3.jpeg" class="card-img-top" alt="Nivel 3">
                        <div class="card-body text-center">
                            <h5 class="card-title card-title__custom">Nivel 3: Instalaciones Dr. C</h5>
                            <p class="card-text card-text__custom">Un lugar peligroso lleno de enemigos, este nivel tiene la mayor
                                dificultad donde te espera el malvado Doctor C.</p>
                                <p class="text-white mt-4 fw-bold text-left">Dificultad: Alta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  return $nivelesJuego;
}
