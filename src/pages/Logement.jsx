// AFFICHE LE DÉTAIL D'UN LOGEMENT SÉLECTIONNÉ

// useParams : permet de récupérer l'id depuis l'URL
// Navigate : permet de rediriger vers une autre page
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../styles/logement.scss";

// Page Logement
// Cette page est accessible via une route dynamique basée sur l'id du logement

function Logement({ logements }) {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <Navigate to="/not-found" />;
  }

  return (
    <main className="logement">
      {/* Carrousel */}
      <Slideshow images={logement.pictures} />

      {/* Header : infos + hôte */}
      <section className="logement__header">
        <div className="logement__infos">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          {/* Tags */}
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hôte */}
        <div className="logement__host">
          <div className="host">
            <p className="host__name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host__picture"
            />
          </div>
          {/* Rating */}
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= logement.rating ? "star star--active" : "star"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Collapses */}
      <section className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="equipments">
            {logement.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}

export default Logement;
