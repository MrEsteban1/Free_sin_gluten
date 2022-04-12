import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SearchBar = () => {
  const [category, setCategory] = useState("sin filtro");
  const filters = ["sin filtro", "entrada", "plato principal", "postre"];

  const navigate = useNavigate();
  const handleChange = (e) => setCategory(e.target.value);

  useEffect(() => {
    navigate("/products/" + category);
  }, [category]);

  return (
    <div className="searchBar-Screen">
      <form onSubmit={() => {}}>
        <select className="searchBar-selectFood" onClick={handleChange}>
          {filters.map((item, i) => (
            <option key={i} value={item}>
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
        <button className="searchBar-button" type="submit">
          Buscar
        </button>
        <input className="searchBar-input" type="text"></input>
      </form>
    </div>
  );
};

export default SearchBar;
