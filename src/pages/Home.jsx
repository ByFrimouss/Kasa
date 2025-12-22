import logements from "../data/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <Banner />
      <div className="card-list">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
