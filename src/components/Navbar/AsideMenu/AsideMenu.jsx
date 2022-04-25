import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AsideMenu = () => {
  const [showChart, setShowChart] = useState(false);
  const handleShowChart = () => {
    setShowChart(!showChart);
  };
  return (
    <li className="menu-buguer-nav">
      <button onClick={handleShowChart}>
        <img src="assets/burger_nav_2.png" alt="Logo de la imagen" />
      </button>
      <ul
        className="menu-ul"
        style={!showChart ? { display: "none" } : { display: "flex" }}
      >
        <li className="menu-title">Menu:</li>
        <li>
          <Link className="menu-link" to={"/products/sin%20filtro"}>
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to={"/products/sin%20filtro"}>
            Seguir Order
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default AsideMenu;
