import React, { useState } from "react";
import { useCounter } from "../../../CustomHooks/useCounter";
import "./style.css";

const Item = ({ title, image, detail, stock }) => {
  const [selectedItems, setSelected] = useState(0);

  const { counter, increment, decrement } = useCounter(0, stock);

  return (
    <div className="itemScreen">
      <h3>{title}</h3>
      <img src={image} alt="" />
      <span>{detail}</span>
      <div className="number_items">
        {counter}/{stock}
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

export default Item;
