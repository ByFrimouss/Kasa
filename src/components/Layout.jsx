// STRUCTURE PRINCIPALE DE L'APPLICATION

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Composant Layout
// Il intègre le Header, le Footer et le contenu dynamique de chaque page via Outlet
// Ce composant sert de "squelette" pour toutes les pages de l'application

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="container">
        {/* Outlet de react-router-dom affiche dynamiquement le composant correspondant à la route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
