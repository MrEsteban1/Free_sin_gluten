import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css";
import ItemListContainer from "./components/General/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/General/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider, ChartContext } from "./contexts/chartContext";
import Chart from "./components/Chart/Chart";
import { OrderCart } from "./components/Order/orderCart/orderCart";
import { OrderContainer } from "./components/Order/orderContainer";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import OrderConsult from "./components/OrderConsult/OrderConsult";

function App() {
  //const [chart, setChart] = useState([]);

  return (
    <div className="App">
      <CartProvider>
        {/* <ChartContext.Provider value={[chart, setChart]}> */}
        <BrowserRouter>
          <Navbar />
          <section id="section-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route
                path="/products/:category"
                element={<ItemListContainer />}
              />
              <Route path="/recipe/:idItem" element={<ItemDetailContainer />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/order" element={<OrderContainer />} />
              <Route path="/seguir_orden" element={<OrderConsult />} />
            </Routes>
          </section>
          <Footer />
        </BrowserRouter>
        {/* </ChartContext.Provider> */}
      </CartProvider>
    </div>
  );
}

export default App;
