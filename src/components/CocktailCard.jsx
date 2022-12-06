import { useNavigate, useParams } from "react-router-dom";

const CocktailCard = () => {
  const endpoint = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const navigate = useNavigate();

  const { id } = useParams();

  const getCocktailById = async (url) => {
    //console.log(url);
    const cocktailResult = await fetch(url);
    //console.log(cocktailResult);
    const data = await cocktailResult.json();
    console.log(data);
  };

  return (
    <div>
      <div
        className="card bg-dark text-white text-end m-3"
        style={{ width: "18rem" }}
      >
        {/*
        <img className="card-img-top" src={imgUrl} alt={imgAlt} />
        <div className="card-body">
          <h4 className="card-title">{cocktailName}</h4>
          <p className="card-text">{cocktailDescription}</p>
          <Link to={`/drink/${cocktailUrl}`} className="btn btn-danger">
            See cocktail <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        */}
      </div>
    </div>
  );
};
export default CocktailCard;
