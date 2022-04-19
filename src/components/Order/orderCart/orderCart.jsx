import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

export const OrderCart = ({ cart = [] }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/products/sin%20filtro");
    }
  }, [cart, navigate]);
  return (
    <div className="order-chart">
      <img src="assets/chart.png" alt="" />
      <h4>Carrito:</h4>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <strong>{product.nombre}</strong> x {product.cantidad}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
