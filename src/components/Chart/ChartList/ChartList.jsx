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
        <li>
          <div>Descripción:</div>
          <div>Unidades:</div>
          <div style={{"margin-right": "100px"}}>Precio:</div>
        </li>
        
        {cart.map((product) => (
          <li key={product.id}>
            <div className="chart-product-data">
              <img src={product.imagen} alt={product.nombre} title={product.nombre} /> <span>{product.nombre.slice(0,20) }{ (product.nombre.length > 20) && "..."}</span>
            </div>
            <div style={{"margin-right": "100px"}}>
              {product.cantidad}
            </div>
            <div className="chart-product-buttons">
              <span>
                 ${product.precio}
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
