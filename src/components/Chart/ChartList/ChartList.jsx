import React, { useContext } from "react";
import { ChartContext } from "../../../contexts/chartContext";

const ChartList = () => {
  const [chart, setChart] = useContext(ChartContext);
  const handleDeleteItem = (id) => {
    let items = chart.filter((e) => e.id != id);

    setChart([...items]);
  };
  return (
    <>
      <ul className="chart-list">
        {chart.map((product) => (
          <li key={product.id}>
            <div className="chart-product-data">
              <img src={product.image} alt="" /> <span>{product.title}</span>
            </div>

            <div className="chart-product-buttons">
              <span>
                <strong> Precio</strong>: ${product.price}
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
