import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../../../CustomHooks/useCounter";
import "./style.css";

const Item = ({ id, title, image, price }) => {
  const [selectedItems, setSelected] = useState(0);

  const { counter, increment, decrement } = useCounter(0);

  return (
    <div className="itemScreen">
      <h3>
        {title.slice(0, 30)} {title.length > 20 ? "..." : ""}{" "}
      </h3>
      <img src={image} alt="" />
      <span>
        {" "}
        <b>Precio:</b> ${price}
      </span>
      <div className="number_items">{counter}</div>
      <div>
        <button
          className="button-counter"
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <button
          className="button-counter"
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>
      <Link to={`/recipe/${id}`}>
        <button className="button-detalle">Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
