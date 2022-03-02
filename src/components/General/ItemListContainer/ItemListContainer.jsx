import React from 'react';
import "./style.css";

const ItemListContainer = ({title,image,detail}) => {
  return (
    <div className='itemScreen'>
      <h3>{title}</h3>
      <img src={image} alt="" />
      <span>{detail}</span>
      <button>Elegir</button>
    </div>
  )
}

export default ItemListContainer