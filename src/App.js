import React from "react";
import Navbar from "./components/Navbar/navbar";
import "./App.css";
import ItemListContainer from "./components/General/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/General/ItemDetailContainer/itemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
