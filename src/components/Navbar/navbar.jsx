import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChartContext, useCart } from "../../contexts/chartContext";
import ChartWidget from "./ChartWidget/ChartWidget";

import "./style.css";

const Navbar = () => {
  // const [chart, setChart] = useContext(ChartContext)
  const { cart, addItem, deleteItem } = useCart();

  const handleDeleteItem = (id) => {
    // let items = chart.filter(e => e.id != id)

    deleteItem(id);
  };

  return (
    <nav>
      <div className="brand">
        <Link className="brand-link" to={`/`}>
          <img src="assets/logo.jpg" alt="" />
          <span>Free Sin Gluten</span>
        </Link>
      </div>
      <ul>
        <Link className="nav-link"  to={`/products/sin%20filtro`}>
          <li >Productos</li>
        </Link>
        <ChartWidget chart={cart} handleDeleteItem={handleDeleteItem} />
      </ul>
    </nav>
  );
};

export default Navbar;
