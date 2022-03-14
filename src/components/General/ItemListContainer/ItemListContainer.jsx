import React, { useState } from "react";
import ItemList from "./ItemList/ItemList";
import "./style.css";

const ItemListContainer = ({ title, image, detail, stock }) => {
  return (
    <div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
