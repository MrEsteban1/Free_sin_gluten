import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
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
          <img src="assets/chart.png" alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
