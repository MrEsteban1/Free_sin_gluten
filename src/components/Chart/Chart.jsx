import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import utils from "../../utils";
import ChartList from "./ChartList/ChartList";
import "./style.css";

const Chart = ({ products, setChart }) => {
  const [total, setTotal] = useState(0);
  const handleBuy = () => {
    setChart([]);
    Swal.fire("Muchas gracias por su compra");
  };
  const handleEmptyChart = () => {
    setChart([]);
    Swal.fire("Se borro el carrito");
  };
  const navigate = useNavigate();

  useEffect(() => {
    const { calcularTotal } = utils;
    if (products.length === 0) navigate("/");
    products.length !== 0 && setTotal(calcularTotal(products));
    return;
  }, [products, navigate]);

  return (
    <div className="chart-screen">
      <h3>Carrito de compras:</h3>
      <ChartList />
      <h3>Precio total: ${total} </h3>
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
