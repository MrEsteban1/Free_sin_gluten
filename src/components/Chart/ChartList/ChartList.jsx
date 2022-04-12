import React, { useContext } from "react";
import { ChartContext, useCart } from "../../../contexts/chartContext";

const ChartList = () => {
  const { cart, setChart, deleteItem } = useCart();
  const handleDeleteItem = (id) => {
    // let items = cart.filter((e) => e.id != id);

    deleteItem(id);
  };
  return (
    <>
      <ul className="chart-list">
        {cart.map((product) => (
          <li key={product.id}>
            <div className="chart-product-data">
              <img src={product.imagen} alt="" /> <span>{product.nombre}</span>
            </div>

            <div className="chart-product-buttons">
              <span>
                <strong> Precio</strong>: ${product.precio}
              </span>
              <button
                className="chart-product-buttonEliminar"
                onClick={() => handleDeleteItem(product.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ChartList;
