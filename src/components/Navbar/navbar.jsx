import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ChartContext } from "../../contexts/chartContext";

import "./style.css";

const Navbar = () => {
  const [showChart, setShowChart] = useState(false)
  const [chart, setChart] = useContext(ChartContext)

  const handleShowChart = () =>{
    setShowChart(!showChart)
  }

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
        <li>
          <button className="nav-button-chart" onClick={handleShowChart}>
          <img src="assets/chart.png" alt="Logo de la imagen" />
          <div className="nav-item-counter">{chart.length}</div>
          </button>
          <ul className="nav-item-list" style={!showChart ? {display:"none"} : {display:"flex"}}>
            {chart.length > 0 ? chart.map((e,i)=>{
              return <li key={e.id}>{i+1}. {e.title.slice(0,20)}{(e.title.length > 20) ? "..." : ""}  <button onClick={() => handleDeleteItem(e.id) }  className="nav-item-list-deleteItem">Borrar</button> </li>
            }): <li key={101}>No hay elementos en el carrito</li>} 
            <li style={{border:"none"}}> <Link to={'/chart'} className="nav-item-list-buttonBuy" >Ir al carrito</Link></li> 
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
