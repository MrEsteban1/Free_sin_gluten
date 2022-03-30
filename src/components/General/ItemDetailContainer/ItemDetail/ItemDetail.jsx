import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChartContext } from "../../../../contexts/chartContext";
import { useCounter } from "../../../CustomHooks/useCounter";
import Counter from "../../ItemListContainer/counter/counter";
import "./style.css";

const ItemDetail = ({ data }) => {
  const { id, title, servings: calories, image, pricePerServing: price } = data;
  const { counter, increment, decrement } = useCounter(0)
  const [chart, setChart] = useContext(ChartContext)
  const handlerAdd = async () => {
    const itemToCart = {
      id,
      title,
      image,
      price: price*counter,
      cantidad: counter
    }
    let arrayAux = []
    let index = await chart.findIndex(product=>
        product.id === id
    )
    console.log("index",index)
    
    index !== -1 ?
    (arrayAux = [...chart,itemToCart]) : arrayAux = [ await(chart.map( product => product.id === id && (product.price = product.price + itemToCart.price)))]

    setChart([...arrayAux])
    console.log("chart", chart)
    
  }

  const validateProduct = (item, chart) => {
      
  }

  useEffect(() => {}, []);

  return (
    <div className="item_detail">
      <div className="item-detail-backButton">
        <Link to={`/`}>
          <button>Volver</button>
        </Link>
      </div>
      <div className="item-detail-view">
        <h2>{title}</h2>
        <h3 className="item-detail-id">ID: #{id}</h3>
        <img className="item-detail-image" src={image} alt="" />
      </div>
      <div className="item-detail-description">
        <ul>
          <li className="item-detail-list-item">
            <b>Calorias:</b> {calories}
          </li>
          <li className="item-detail-list-item">
            <b>Precio:</b> {price}
          </li>
        </ul>
        <Counter counter={counter} increment={increment} decrement={decrement} handlerAdd={handlerAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
