function Card({ logement }) {
  return (
    <div className="card">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
    </div>
  );
}

export default Card;
