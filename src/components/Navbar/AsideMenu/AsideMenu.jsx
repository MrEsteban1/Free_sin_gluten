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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-9wkExBtleYaI_xQXoWYmoMPoqzEtHapPMDkoy21bI2QPqgnhm6ugPPPfdRnkAbmnyA&usqp=CAU"
          alt="Logo de la imagen"
        />
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
          <Link className="menu-link" to={"/seguir_orden"}>
            Seguir Order
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default AsideMenu;
