export function Contacto() {
  const $contacto = document.createElement("div");
  $contacto.classList.add("popular_games_section");

  $contacto.innerHTML = `
    <h2 class="my-4 py-2">Página de Contacto</h2>
    <div class="container text-justify">
        <div class="row mb-4">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>¿Tienes preguntas, comentarios o necesitas ayuda? Estamos aquí para asistirte. Completa el
                    formulario a continuación o utiliza cualquiera de nuestros medios de contacto.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label for="name">
                    <p>Nombre:</p>
                </label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Tu nombre" required>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label for="email">
                    <p>Correo electrónico:</p>
                </label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Tu correo electrónico"
                    required>
                <label for="message">
                    <p>Mensaje:</p>
                </label>
                <textarea class="form-control" id="message" name="message" rows="5"
                    placeholder="Escribe tu mensaje aquí" required></textarea>
                <div class="row mt-3">
                    <div class="col-lg-12 text-center">
                        <button type="submit" class="btn btn-red-dark">Enviar</button>
                    </div>
                </div>
                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-4 col-md-6 text-center mb-4">
                        <i class="fa fa-map-marker-alt fa-2x mb-2"></i>
                        <p>Sahuayo, Michoacán, México</p>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-4">
                        <i class="fa fa-envelope fa-2x mb-2"></i>
                        <p>correo@mascaramortal.com</p>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-4">
                        <i class="fa fa-phone fa-2x mb-2"></i>
                        <p>+52 123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    <section class="live_stream_section py-5">
        <div class="container text-center" id="personajes">
            <div class="row" >
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 class="mb-4">Nuestras plataformas de contacto</h2>
                </div>
            </div>
            <div class="row justify-content-center" >
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <a href="https://www.facebook.com/profile.php?id=61570332475640" target="_blank" class="social-link">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <a href="https://www.instagram.com" target="_blank" class="social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <a href="https://www.github.com" target="_blank" class="social-link">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;

    return $contacto
}
