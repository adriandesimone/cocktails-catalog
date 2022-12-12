import "./Home.scss";
import SiteTitle from "./SiteTitle";
import Loading from "./Loading";
import CocktailSearchCard from "./CocktailSearchCard";
import CocktailRandom from "./CocktailRandom";
import { useState } from "react";

const Home = () => {
  const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [texto, setTexto] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [cocktailList, setCocktailList] = useState([]);

  const getSearch = async (url) => {
    setShowLoading(true);
    //console.log(url);
    const searchResult = await fetch(url);
    //console.log(searchResult);
    const data = await searchResult.json();
    //console.log(data);
    if (data !== null && data.drinks !== null && data.drinks.length > 0)
      setCocktailList(data.drinks);
    else setCocktailList([]);
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
          <div className="col">
            <div className="searchForm">
              <label htmlFor="search">Search for a cocktail</label>
              <input
                id="search"
                type="search"
                placeholder="Search for a cocktail"
                autoFocus
                value={texto}
                onKeyDown={(e) => {
                  if (e.key === "Enter") getSearch(`${endpoint}${texto}`);
                }}
                onChange={(e) => setTexto(e.target.value)}
              />
              <button
                type="submit"
                onClick={() => getSearch(`${endpoint}${texto}`)}
              >
                <li className="fa fa-search"></li>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="searchResult">
        {cocktailList.length > 0 && (
          <h4 className="text-white mt-5">Search Results</h4>
        )}
        <div className="row m-4">
          {cocktailList.length > 0 &&
            cocktailList.map((item, index) => {
              return (
                <div className="col">
                  <CocktailSearchCard
                    imgUrl={item.strDrinkThumb}
                    imgAlt={item.strDrink}
                    cocktailName={item.strDrink}
                    cocktailDescription={`${item.strCategory} - ${item.strAlcoholic} - ${item.strGlass}`}
                    cocktailUrl={item.idDrink}
                    key={index.toString()}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="randomDrinks">
        <CocktailRandom />
      </div>
    </>
  );
};
export default Home;
