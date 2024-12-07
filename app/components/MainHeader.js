import { Nav } from "./Nav.js";

export function MainHeader() {
  const $mainHeader = document.createElement("header");
  $mainHeader.classList.add("sub-banner-section");

  $mainHeader.appendChild(Nav());

  const $bannerSection = document.createElement("section");
  $bannerSection.classList.add("banner-section");
  $bannerSection.innerHTML = `
   <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-lg-left text-center">
                        <div class="banner-section-content">
                            <h1 data-aos="fade-up">Acerca del juego</h1>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12"></div>
                </div>
            </div>
  `;
  $mainHeader.appendChild($bannerSection)

  return $mainHeader;
}
