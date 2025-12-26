import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";

function Logement({ logements }) {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);
  if (!logement) return <p>Logement introuvable</p>;

  return (
    <>
      <main>
        <Slideshow images={logement.pictures} />
        <h1>{logement.title}</h1>
        {/* autres infos */}
      </main>
    </>
  );
}

export default Logement;
