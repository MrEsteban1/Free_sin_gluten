import React, { useState } from "react";
import ItemList from "./ItemList/ItemList";
import "./style.css";

const ItemListContainer = ({ title, image, detail, stock }) => {
  const [selectedItems, setSelected] = useState(0);

  const increment = () => {
    if (selectedItems < stock) setSelected(selectedItems + 1);
  };

  const decrement = () => {
    if (selectedItems !== 0) setSelected(selectedItems - 1);
  };

  return (
    <div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
