import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChartWidget = ({ chart = [], handleDeleteItem }) => {
  const [showChart, setShowChart] = useState(false);
  const handleShowChart = () => {
    setShowChart(!showChart);
  };
  console.log("CHART", chart);

  return (
    <li>
      <button className="nav-button-chart" onClick={handleShowChart}>
        <img src="assets/chart.png" alt="Logo de la imagen" />
        <div
          className="nav-item-counter"
          style={chart.length === 0 ? { display: "none" } : {}}
        >
          {chart.length}
        </div>
      </button>
      <ul
        className="nav-item-list"
        style={!showChart ? { display: "none" } : { display: "flex" }}
      >
        {chart.length > 0 ? (
          chart.map((e, i) => {
            console.log("coso", e);
            return (
              <li key={e.id}>
                <h5>
                  {i + 1}. {e.nombre.slice(0, 20)}
                  {e.nombre.length > 20 ? "..." : ""}
                </h5>
                <span>x {e.cantidad}</span>
                <button
                  onClick={() => handleDeleteItem(e.id)}
                  className="nav-item-list-deleteItem"
                >
                  Borrar
                </button>
              </li>
            );
          })
        ) : (
          <li key={101}>No hay elementos en el carrito</li>
        )}
        <li style={{ border: "none" }}>
          {" "}
          <Link to={"/chart"} className="nav-item-list-buttonBuy">
            Ir al carrito
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default ChartWidget;
