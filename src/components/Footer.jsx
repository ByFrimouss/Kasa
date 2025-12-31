// FOOTER DE L’APPLICATION

import logo from "../assets/LOGO-footer.png";

// Composant Footer
// Affiche le logo de l'entreprise et un texte de copyright
// Présent sur toutes les pages via le composant Layout

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
