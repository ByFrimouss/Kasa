// Gestion de la navigation de l'application

// BrowserRouter : enveloppe l'application et gère l'historique de navigation
// Routes : conteneur des routes
// Route : définit une route individuelle
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Logement from "../pages/Logement";
import logements from "../data/logements.json";

// Fichier Router
// Centralise toutes les routes et définit la structure générale via Layout

function Router() {
  return (
    // BrowserRouter englobe toute l'application pour activer le routage
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="/logement/:id"
            element={<Logement logements={logements} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
