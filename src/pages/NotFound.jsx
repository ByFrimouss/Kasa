// Page d'erreur 404

import { Link } from "react-router-dom";
import "../styles/notFound.scss";

// Page NotFound
// Affichée lorsque l'utilisateur tente d'accéder à une route inexistante

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">
        Oups ! La page que vous cherchez n’existe pas.
      </p>
      <Link to="/" className="notfound-button">
        Retourner sur page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
