import { obtenerPersonajes } from "../helpers/fb_requests.js";

export async function personajesCard() {
  try {
    const $personajes = document.getElementById("personajes")
    const personajesList = await obtenerPersonajes();
    console.log(personajesList);

    personajesList.forEach((personaje) => {
           $personajes.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="popular_content padding_bottom">
                                <div class="popular_upper_portion">
                                    <figure class="mb-0 img_width"><img src="${personaje.imagen}" alt="imagen de personaje">
                                    </figure>
                                    <div class="hover_box_plus"><a href="#">
                                            <figure class="mb-0"><img src="app/assets/images/box_hover_plus.png" alt="">
                                            </figure>
                                        </a></div>
                                </div>
                                <div class="popular_lower_portion_wrapper">
                                    <div class="popular_lower_portion">
                                        <div class="popular_span_wrapper">
                                            <span>${personaje.nombre}</span>
                                        </div>
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    });
  } catch (error) {
    console.log("error al obtener los datos:", error);
  }


}
