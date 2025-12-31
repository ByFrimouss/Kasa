// BANNIÈRE DE LA PAGE D’ACCUEIL

import "../styles/banner.scss";

// Composant Banner
// Props :
// - image : l'URL de l'image à afficher.
// - title : le texte à afficher au-dessus de l'image (optionnel).
// - overlayOpacity : opacité de l'overlay noir placé sur l'image (par défaut 0.6 pour assombrir légèrement l'image).

function Banner({ image, title, overlayOpacity = 0.6 }) {
  return (
    <div className="banner">
      <img src={image} alt={title || "Bannière Kasa"} />

      <div
        className="banner__overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>

      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;
