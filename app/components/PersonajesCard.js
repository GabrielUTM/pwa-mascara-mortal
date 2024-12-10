const characters = [
  {
    bando: "Zombie",
    descripcion: "Enemigo común del juego",
    estatura: 1.75,
    nombre: "Zombie A",
    peso: 75,
    imagen: "./app/assets/images/1.png",
  },
  {
    bando: "Rudo",
    descripcion: "Antagonista principal del juego",
    estatura: 1.9,
    nombre: "Dr. C",
    peso: 90,
    imagen: "",
  },
  {
    bando: "Tecnico",
    descripcion: "Protagonista del juego",
    estatura: 1.9,
    nombre: "ElSantos",
    peso: 90,
    imagen: "",
  },
  {
    bando: "Zombie",
    descripcion:
      "Este enemigo es más común a partir de la ronda 3 y tiene estadisticas mejoradas",
    estatura: 1.7,
    nombre: "Zombie B",
    peso: 85,
    imagen: "./app/assets/images/2.png",
  },
  {
    bando: "Zombie",
    descripcion: "Este enemigo es más común a partir de la ronda 7",
    estatura: 1.9,
    nombre: "Zombie C",
    peso: 75,
    imagen: "./app/assets/images/3.png",
  },
];

export function PersonajesCard() {
  const $rowPersonajes = document.createElement("div");
  $rowPersonajes.classList.add("row");
  characters.forEach((character) => {
    const $personajes = document.createElement("div");
    $personajes.classList.add(
      "col-lg-4",
      "col-md-4",
      "col-sm-12",
      "col-xs-12",
      "my-3"
    );
    $personajes.innerHTML += `
  <div class="card border-danger card__personajes text-justify">
  <img src="${
    character.imagen ? character.imagen : "./app/assets/images/1.png"
  }" class="card-img-top" alt="...">
  <div class="card-body card__text-content overflow-auto">
    <h5 class="card-title card__title text-center">${character.nombre}</h5>
    <p class="card-text card__text">${character.descripcion}</p>
  </div>
  <ul class="list-group list-group-flush list__group-bg">
    <li class="list-group-item border-top border-danger list__item">Bando: ${
      character.bando
    }</li>
    <li class="list-group-item  border-top border-danger list__item">Estatura: ${
      character.estatura
    }</li>
    <li class="list-group-item border-top border-danger list__item">Peso: ${
      character.peso
    }</li>
  </ul>
</div>
    `;
    $rowPersonajes.appendChild($personajes);
  });

  return $rowPersonajes;
}
