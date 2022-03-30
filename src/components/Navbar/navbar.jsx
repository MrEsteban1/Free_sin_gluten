import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChartContext } from "../../contexts/chartContext";
import ChartWidget from "./ChartWidget/ChartWidget";

import "./style.css";

const Navbar = () => {
  
  const [chart, setChart] = useContext(ChartContext)

  const handleDeleteItem = (id) =>{
    let items = chart.filter(e => e.id != id)

    setChart([...items])
  }

  return (
    <nav>
      <div className="brand">
        <Link to={`/`}>
          <img src="assets/logo.jpg" alt="" />
          <span>Free Sin Gluten</span>
        </Link>
      </div>
      <ul>
        <Link to={`/`}>
          <li className="nav-link">Productos</li>
        </Link>
        <ChartWidget chart={chart} handleDeleteItem={handleDeleteItem}/>
      </ul>
    </nav>
  );
};

export default Navbar;
