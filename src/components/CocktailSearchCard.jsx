import { Link } from "react-router-dom";

const CocktailSearchCard = ({
  imgUrl,
  imgAlt,
  cocktailName,
  cocktailDescription,
  cocktailUrl,
}) => {
  return (
    <div>
      <div
        className="card bg-dark text-white text-end m-3"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" src={imgUrl} alt={imgAlt} />
        <div className="card-body">
          <h3 className="card-title">{cocktailName}</h3>
          <p className="card-text">{cocktailDescription}</p>
          <Link to={`/drink/${cocktailUrl}`} className="btn btn-danger">
            See cocktail <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CocktailSearchCard;
