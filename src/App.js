import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css";
import ItemListContainer from "./components/General/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/General/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChartContext } from "./contexts/chartContext";

function App() {
  const [chart, setChart] = useState([]);

  return (
    <div className="App">
      <ChartContext.Provider value={chart}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/recipe/:idItem" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </ChartContext.Provider>
    </div>
  );
}

export default App;
