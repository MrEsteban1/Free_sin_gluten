import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ItemList from "./ItemList/ItemList";
import "./style.css";

const ItemListContainer = () => {
  return (
    <div className="item-container">
      <SearchBar/>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
