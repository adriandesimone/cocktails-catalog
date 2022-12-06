import "./App.scss";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/drink/:id" element="A Drink" />
          <Route path="/random-drink" element="A Random Drink" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
