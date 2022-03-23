import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../../../CustomHooks/useCounter";
import Counter from "../counter/counter";
import "./style.css";

const Item = ({ id, title, image, price }) => {
  const [selectedItems, setSelected] = useState(0);

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

      <Counter />
      <Link to={`/recipe/${id}`}>
        <button className="button-detalle">Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
