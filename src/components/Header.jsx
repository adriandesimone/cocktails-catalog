import "./Header.scss";
import icon from "../cocktail_icon.png";
import { useState } from "react";

const Header = () => {
  const [texto, setTexto] = useState("");

  return (
    <div className="header">
      <div className="icon">
        <h1 className="siteTitle">
          <img src={icon} alt="Page icon" /> Cocktails Catalog
        </h1>
      </div>
      <div className="searchForm">
        <label htmlFor="search">Search for a cocktail</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          value={texto}
          onKeyDown={(e) => {
            if (e.key === "Enter") console.log("send");
          }}
          onChange={(e) => setTexto(e.value)}
        />
        <button type="submit" onClick={() => alert("envío")}>
          Go
        </button>
      </div>
    </div>
  );
};
export default Header;
