import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChartContext, useCart } from "../../contexts/chartContext";
import AsideMenu from "./AsideMenu/AsideMenu";
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
          <img
            src="https://jumboalacarta.com.ar/wp-content/uploads/2017/10/Logos-gluten.png"
            alt=""
          />
          <span>Free Sin Gluten!</span>
        </Link>
      </div>
      <ul>
        <Link className="nav-link" to={`/products/sin%20filtro`}>
          <li>Productos</li>
        </Link>
        <Link className="nav-link" to={`/seguir_orden`}>
          <li>Seguir orden</li>
        </Link>
        <ChartWidget chart={cart} handleDeleteItem={handleDeleteItem} />
        <AsideMenu />
      </ul>
    </nav>
  );
};

export default Navbar;
