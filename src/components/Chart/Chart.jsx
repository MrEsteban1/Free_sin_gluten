import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ChartList from "./ChartList/ChartList";
import "./style.css";

const Chart = ({ products, setChart }) => {
  const handleBuy = () => {
    Swal.fire("Muchas gracias por su compra");
  };
  const handleEmptyChart = () => {
    setChart([]);
    Swal.fire("Se borro el carrito");
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) navigate("/");
  }, [products]);

  return (
    <div className="chart-screen">
      <h3>Carrito de compras:</h3>
      <ChartList />
      <div>
        <button className="chart-comprarButton" onClick={handleBuy}>
          Comprar
        </button>
        <button
          className="chart-comprarBorrar"
          onClick={() => {
            handleEmptyChart();
          }}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Chart;
