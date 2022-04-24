import React, { useEffect } from "react";
import { useCart } from "../../contexts/chartContext";
import { OrderCart } from "./orderCart/orderCart";
import OrderForm from "./OrderForm/OrderForm";

export const OrderContainer = () => {
  const { cart, calcularTotal,buyer } = useCart();
  
  useEffect(()=>{
    calcularTotal(cart)
    //console.log("TOTAL:", calcularTotal(cart))
  },[])

  
  return (
    <section id="order-container">
      <OrderForm />
      <OrderCart cart={cart} />
    </section>
  );
};
