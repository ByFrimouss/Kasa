import { Link } from "react-router-dom";
import "../styles/notFound.scss";

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
