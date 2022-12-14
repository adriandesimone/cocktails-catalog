import Loading from "./Loading";
import { useState, useEffect } from "react";
import CocktailSearchCard from "./CocktailSearchCard";

const CocktailRandom = () => {
  const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const [showLoading, setShowLoading] = useState(false);
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    async function getRandom() {
      const randomDrinks = [];
      setShowLoading(true);
      for (let i = 0; i <= 2; i++) {
        //console.log(endpoint);
        const randomResult = await fetch(endpoint);
        //console.log(randomResult);
        const data = await randomResult.json();
        //console.log(data);
        if (data !== null && data.drinks !== null && data.drinks.length > 0)
          randomDrinks.push(data.drinks[0]);
      }
      //console.log(randomDrinks);
      setCocktailList(randomDrinks);
      setShowLoading(false);
    }
    getRandom();
  }, []);

  return (
    <>
      {showLoading && <Loading />}
      <div className="randomDrinks mt-5">
        <h5 className="text-white">Ramdom Cocktails</h5>
        <div className="row m-3">
          {cocktailList.length > 0 &&
            cocktailList.map((item, index) => {
              if (index > 2) return <></>;
              return (
                <CocktailSearchCard
                  key={index}
                  imgUrl={item.strDrinkThumb}
                  imgAlt={item.strDrink}
                  cocktailName={item.strDrink}
                  cocktailDescription={`${item.strCategory} - ${item.strAlcoholic} - ${item.strGlass}`}
                  cocktailUrl={item.idDrink}
                />
              );
            })}
        </div>
      </div>
      <div className="randomDrinks"></div>
    </>
  );
};
export default CocktailRandom;
