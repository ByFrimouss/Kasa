// COMPOSANT RÉTRACTABLE POUR SECTIONS D’INFORMATIONS (ACCORDION)

import { useState } from "react"; // Hook React pour gérer l'état local du composant
import arrow from "../assets/arrow_haut.png";
import "../styles/collapse.scss";

// Composant Collapse : crée un encadré rétractable (accordion) qui peut contenir n'importe quel contenu.
// Props :
// - title : le texte affiché dans l'en-tête du collapse.
// - children : le contenu qui sera affiché uniquement lorsque le collapse est ouvert.

function Collapse({ title, children }) {
  // isOpen : booléen pour savoir si le collapse est ouvert ou fermé
  // setIsOpen : fonction pour changer l'état de isOpen
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="flèche"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      {/* Affiche seulement si isOpen est true grâce à children qui le rend flexible */}
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
