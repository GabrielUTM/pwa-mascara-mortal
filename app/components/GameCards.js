import { apiRequests } from "../helpers/api_requests.js";

export async function GameCards() {
  const $GameCard = document.createElement("div"),
    games = await apiRequests(),
    $rowGames = document.createElement("div"),
    $ContainerGameCard = document.createElement("div");
  $ContainerGameCard.classList.add("container");
  $rowGames.classList.add("row");
  $GameCard.classList.add("video_logo_section");

  games.slice(0, 10).forEach((game) => {
    const $juegos = document.createElement("div");
    $juegos.classList.add(
      "col-lg-4",
      "col-md-4",
      "col-sm-12",
      "col-xs-12",
      "my-3"
    );
    $juegos.innerHTML += `
  <div class="card border-danger card__personajes text-justify">
   <img src="${
     game.thumbnail ? game.thumbnail : "./app/assets/images/1.png"
   }" class="card-img-top" alt="...">
  <div class="card-body card__text-content overflow-auto">
    <h5 class="card-title card__title text-center">${game.title}</h5>
  </div>
  <ul class="list-group list-group-flush list__group-bg">
    <li class="list-group-item border-top border-danger list__item">Genero: ${
      game.genre
    }</li>
    <li class="list-group-item border-top border-danger list__item">Publisher: ${
      game.publisher
    }</li>
    <li class="list-group-item border-top border-danger list__item">Plataforma: ${
      game.platform
    }</li>
    <li class="list-group-item border-top border-danger list__item">Desarrollador: ${
      game.developer
    }</li>
  </ul>
</div>
    `;
    $rowGames.appendChild($juegos);
  });

  $ContainerGameCard.appendChild($rowGames);
  $GameCard.appendChild($ContainerGameCard);
  document.querySelector(".loader").style.display = "none";

  return $GameCard;
}
