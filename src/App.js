import "./App.scss";
import Header from "./components/Header";
import CocktailSearchCard from "./components/CocktailSearchCard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element="Home Page" />
          <Route path="/drink/:id" element="A Drink" />
          <Route path="/random-drink" element="A Random Drink" />
        </Routes>
      </BrowserRouter>
      <Header />
      <div className="row m-4">
        <div className="col">
          <CocktailSearchCard
            imgUrl="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
            imgAlt="Margarita"
            cocktailName="Margarita"
            cocktailDescription="Ordinary Drink - Alcoholic - Cocktail glass"
            cocktailUrl="www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"
          />
        </div>
        <div className="col">
          <CocktailSearchCard
            imgUrl="https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg"
            imgAlt="Blue Margarita"
            cocktailName="Blue Margarita"
            cocktailDescription="Ordinary Drink - Alcoholic - Cocktail glass"
            cocktailUrl="www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11118"
          />
        </div>
        <div className="col">
          <CocktailSearchCard
            imgUrl="https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg"
            imgAlt="Tommy's Margarita"
            cocktailName="Tommy's Margarita"
            cocktailDescription="Ordinary Drink - Alcoholic - Old-Fashioned glass"
            cocktailUrl="www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17216"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
