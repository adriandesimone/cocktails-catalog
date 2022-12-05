import "./Header.scss";
import icon from "../cocktail_icon.png";
import { useState } from "react";

const Header = () => {
  const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [texto, setTexto] = useState("");

  return (
    <div className="header">
      <div className="row">
        <div className="col">
          <div className="icon">
            <h1 className="siteTitle">
              <img src={icon} alt="Page icon" /> Cocktails Catalog
            </h1>
          </div>
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
                if (e.key === "Enter") console.log(`${endpoint}${texto}`);
              }}
              onChange={(e) => setTexto(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => console.log(`${endpoint}${texto}`)}
            >
              <li className="fa fa-search"></li>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
