import React, { useState } from "react";
import { getRandomData } from "../../../services/spoonacularAPI";
import ItemList from "./ItemList/ItemList";
import "./style.css";

const ItemListContainer = () => {
  //getRandomData("pasta");
  return (
    <div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
