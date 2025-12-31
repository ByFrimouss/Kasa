// CARTE POUR CHAQUE LOGEMENT

// Composant Card : représente une carte individuelle pour un logement.
// Chaque carte contient l'image de couverture du logement et son titre.

function Card({ logement }) {
  return (
    <div className="card">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
    </div>
  );
}

export default Card;
