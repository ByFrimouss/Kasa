import "../styles/banner.scss";

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
