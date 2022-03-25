import React from 'react'
import "./style.css"

const SearchBar = () => {
  return (
    <div className='searchBar-Screen'> 
        <form onSubmit={()=>{}}>
          <select className='searchBar-selectFood' value={"noFiltro"} onChange={()=>{}}>
              <option value="noFiltro">Sin filtro</option>
              <option value="pasta">Pasta</option>
              <option value="carne">Carne</option>
              <option value="Vegetarian">Vegetariano</option>
          </select>
          <button className='searchBar-button' type="submit">Buscar</button>
          <input className='searchBar-input' type="text"></input>
        </form>  
    </div>
  )
}

export default SearchBar