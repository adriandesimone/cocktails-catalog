import SiteTitle from "./SiteTitle";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CocktailCard = () => {
  const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();
  const [cocktail, setCocktail] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    getCocktailById(`${endpoint}${id}`);
  }, [id]);

  const getCocktailById = async (url) => {
    setShowLoading(true);
    //console.log(url);
    const cocktailResult = await fetch(url);
    //console.log(cocktailResult);
    const data = await cocktailResult.json();
    //console.log(data.drinks[0]);
    if (data !== null && data.drinks !== null && data.drinks.length > 0)
      setCocktail(data.drinks[0]);
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <Loading />}
      <div className="header">
        <div className="row">
          <div className="col">
            <SiteTitle />
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div>
        <div className="card bg-dark text-white m-3" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4 box-shadow h-100">
              <img
                className="img-fluid rounded-start"
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
              <div class="d-grid gap-2">
                <Link to={"/"} className="btn btn-primary text-start p-4">
                  <i className="fa-solid fa-arrow-left"></i> Go back
                </Link>
              </div>
            </div>
            <div className="col-md-8 box-shadow h-100">
              <div className="card-header background-purple-900">
                <h3 className="card-title">{cocktail.strDrink}</h3>
              </div>
              <div className="card-body">
                <h4 className="ms-2">Category: {cocktail.strCategory}</h4>
                <h5 className="mt-3 ms-3">
                  Alcoholic:{" "}
                  {cocktail.strAlcoholic === "Alcoholic" ? "Yes" : "No"}
                </h5>
                <h5 className="mt-3 ms-3">Glass: {cocktail.strGlass}</h5>
                <h5 className="mt-3 ms-4">Ingredients</h5>
                <ul className="ms-4">
                  {cocktail.strIngredient1 !== null && (
                    <li>
                      {cocktail.strIngredient1} ({cocktail.strMeasure1})
                    </li>
                  )}
                  {cocktail.strIngredient2 !== null && (
                    <li>
                      {cocktail.strIngredient2} ({cocktail.strMeasure2})
                    </li>
                  )}
                  {cocktail.strIngredient3 !== null && (
                    <li>
                      {cocktail.strIngredient3} ({cocktail.strMeasure3})
                    </li>
                  )}
                  {cocktail.strIngredient4 !== null && (
                    <li>
                      {cocktail.strIngredient4} ({cocktail.strMeasure4})
                    </li>
                  )}
                  {cocktail.strIngredient5 !== null && (
                    <li>
                      {cocktail.strIngredient5} ({cocktail.strMeasure5})
                    </li>
                  )}
                  {cocktail.strIngredient6 !== null && (
                    <li>
                      {cocktail.strIngredient6} ({cocktail.strMeasure6})
                    </li>
                  )}
                  {cocktail.strIngredient7 !== null && (
                    <li>
                      {cocktail.strIngredient7} ({cocktail.strMeasure7})
                    </li>
                  )}
                  {cocktail.strIngredient8 !== null && (
                    <li>
                      {cocktail.strIngredient8} ({cocktail.strMeasure8})
                    </li>
                  )}
                  {cocktail.strIngredient9 !== null && (
                    <li>
                      {cocktail.strIngredient9} ({cocktail.strMeasure9})
                    </li>
                  )}
                  {cocktail.strIngredient10 !== null && (
                    <li>
                      {cocktail.strIngredient10} ({cocktail.strMeasure10})
                    </li>
                  )}
                </ul>
                <h5 className="mt-3 ms-4">Instructions</h5>
                <p className="ms-5">{cocktail.strInstructions}</p>
                {cocktail.strVideo !== null && (
                  <a
                    className="btn btn-danger ms-4"
                    href={cocktail.strVideo}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i> How to video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CocktailCard;
