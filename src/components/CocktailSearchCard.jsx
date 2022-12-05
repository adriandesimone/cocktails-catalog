const CocktailSearchCard = ({
  imgUrl,
  imgAlt,
  cocktailName,
  cocktailDescription,
  cocktailUrl,
}) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imgUrl} alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title">{cocktailName}</h5>
          <p className="card-text">{cocktailDescription}</p>
          <a href={cocktailUrl} className="btn btn-primary">
            See cocktail
          </a>
        </div>
      </div>
    </div>
  );
};
export default CocktailSearchCard;
