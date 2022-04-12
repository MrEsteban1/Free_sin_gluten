import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../contexts/chartContext";
import utils from "../../utils";
import { handleBuy, handleEmptyChart } from "../../utils/chartFuncions";
import ChartList from "./ChartList/ChartList";
import "./style.css";

const Chart = () => {
  const [total, setTotal] = useState(0);
  const { cart: products, setChart } = useCart();
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
        <button
          className="chart-comprarButton"
          onClick={() => handleBuy(setChart)}
        >
          Comprar
        </button>
        <button
          className="chart-comprarBorrar"
          onClick={() => {
            handleEmptyChart(setChart);
          }}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Chart;
