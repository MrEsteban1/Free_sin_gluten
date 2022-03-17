import React from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css";
import ItemListContainer from "./components/General/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
