import React, { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../counter/counter";
import "./style.css";

const Item = ({ id, title, image, price, type }) => {
  const [selectedItems, setSelected] = useState(0);

  return (
    <article key={id} className="itemScreen">
      <img src={image} alt="" />
      <div className="item-info">
        <h3>
          {title.slice(0, 30)} {title.length > 20 ? "..." : ""}{" "}
        </h3>
        <ul className="item-list">
          <li>
            <b>Precio:</b> ${price}
          </li>
          <li>
            <b>Tipo:</b> {type}
          </li>
        </ul>

        {/* <Counter /> */}
        <Link to={`/recipe/${id}`}>
          <button className="button-detalle">Detalle</button>
        </Link> 
        </div>
    </article>
  );
};

export default Item;
