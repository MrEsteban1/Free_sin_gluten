import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../../contexts/chartContext";
import { useCounter } from "../../../CustomHooks/useCounter";
import Counter from "../../ItemListContainer/counter/counter";
import "./style.css";

const ItemDetail = ({ data }) => {
  const { id, nombre, calorias, imagen, precio } = data;
  const { counter, increment, decrement } = useCounter(0);
  const { cart, addItem } = useCart();

  const handlerAdd = async () => {
    const itemToCart = {
      id,
      nombre,
      imagen,
      precio: precio * counter,
      cantidad: counter,
    };
    // let arrayAux;
    // let index = await cart.findIndex((product) => product.id === id);
    // console.log("index", index);

    // if (index === -1) arrayAux = [...cart, itemToCart];
    // else
    //   arrayAux = await cart.map((product) =>
    //     product.id === id
    //       ? {
    //           ...product,
    //           price: product.precio + itemToCart.precio,
    //           cantidad: product.cantidad + itemToCart.cantidad,
    //         }
    //       : { ...product }
    //   );

    // console.log("chart", arrayAux);
    addItem(itemToCart);
  };

  useEffect(() => {
    console.log("CHART ITEMS", cart);
  }, [cart]);

  return (
    <div className="item_detail">
      <div className="item-detail-backButton">
        <Link to={`/`}>
          <button>Volver</button>
        </Link>
      </div>
      <div className="item-detail-view">
        <h2>{nombre}</h2>
        <h3 className="item-detail-id">ID: #{id}</h3>
        <img className="item-detail-image" src={imagen} alt="" />
      </div>
      <div className="item-detail-description">
        <ul>
          <li className="item-detail-list-item">
            <b>Calorias:</b> {calorias}
          </li>
          <li className="item-detail-list-item">
            <b>Precio:</b> {precio}
          </li>
        </ul>
        <Counter
          counter={counter}
          increment={increment}
          decrement={decrement}
          handlerAdd={handlerAdd}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
