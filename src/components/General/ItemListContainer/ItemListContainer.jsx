import React, { useState } from "react";
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
    <div className="itemScreen">
      <h3>{title}</h3>
      <img src={image} alt="" />
      <span>{detail}</span>
      <div className="number_items">
        {selectedItems}/{stock}
      </div>
      <div>
        <button
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
