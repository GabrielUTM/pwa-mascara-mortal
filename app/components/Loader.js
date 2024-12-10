export function Loader() {
  const $loader = document.createElement("img");
  const $figureLoader = document.createElement("figure");
  const $figureCaption = document.createElement("figcation");
  $figureLoader.classList.add("loader")
  $loader.src = "app/assets/images/bean-eater-s.svg";
  $loader.alt = "Cargando...";
  $figureCaption.textContent = "Cargando..."

  $figureLoader.appendChild($loader)
  $figureLoader.appendChild($figureCaption)

  return $figureLoader
}
