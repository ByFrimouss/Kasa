import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";

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
