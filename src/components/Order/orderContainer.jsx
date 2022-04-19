import React from "react";
import { useCart } from "../../contexts/chartContext";
import { OrderCart } from "./orderCart/orderCart";
import OrderForm from "./OrderForm/OrderForm";

export const OrderContainer = () => {
  const { cart } = useCart();
  console.log("carrito", cart);
  return (
    <section id="order-container">
      <OrderForm />
      <OrderCart cart={cart} />
    </section>
  );
};
