// Page "À propos" de l'application
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import bannerAbout from "../assets/img-banner-about.png";

// Page About
// Présente les valeurs de Kasa à l'aide d'une bannière et de plusieurs sections repliables (Collapse)

function About() {
  return (
    <>
      <Banner image={bannerAbout} overlayOpacity={0.3} />

      <section className="about">
        <div className="about-container">
          <Collapse
            title="Fiabilité"
            children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
          />
          <Collapse
            title="Respect"
            children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            title="Service"
            children="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          />
          <Collapse
            title="Sécurité"
            children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes."
          />
        </div>
      </section>
    </>
  );
}

export default About;
