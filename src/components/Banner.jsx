import "../styles/banner.scss";
import bannerImage from "../assets/img-banner-home.png";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière Kasa" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
