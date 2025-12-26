import logements from "../data/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/header.scss";
import "../styles/card.scss";
import "../styles/footer.scss";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="card-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
