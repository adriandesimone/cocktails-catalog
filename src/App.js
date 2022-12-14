import "./App.scss";
import Home from "./components/Home";
import CocktailCard from "./components/CocktailCard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink/:id" element={<CocktailCard />} />
          {/* <Route path="/random-drink" element="A Random Drink" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
