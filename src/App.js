import "./App.scss";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink/:id" element="A Drink" />
          <Route path="/random-drink" element="A Random Drink" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
