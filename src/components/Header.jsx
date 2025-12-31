// BARRE DE NAVIGATION PRINCIPALE

import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO-header.png";

// Composant Header
// Présente le logo et les liens vers les pages principales
// Utilisé sur toutes les pages via le composant Layout

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <img src={logo} alt="Logo Kasa" />
        </div>

        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
