import React from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css";
import ItemListContainer from "./components/General/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        title="Alfajor Yuca Sin Tack"
        image="https://arcordiezb2c.vteximg.com.br/arquivos/ids/161959-500-400/ALFAJOR-YUKA-DLECHE-STACC-1-6082.jpg?v=637473582852600000"
        detail="Es muy rico!!"
        stock={5}
      />
    </div>
  );
}

export default App;
