// PAGE D'ACCUEIL DE L'APPLICATION

import logements from "../data/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/header.scss";
import "../styles/card.scss";
import "../styles/footer.scss";
import bannerHome from "../assets/img-banner-home.png";
import { Link } from "react-router-dom"; // Link permet la navigation sans rechargement de page

// Page Home
// Affiche la bannière principale et la liste des logements sous forme de cartes cliquables

function Home() {
  return (
    <>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />

      <div className="card-container">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <Card logement={logement} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
