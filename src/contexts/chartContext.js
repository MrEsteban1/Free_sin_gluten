import { async } from "@firebase/util";
import { createContext, useContext, useState } from "react";

export const ChartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    email: "",
    productos: [],
    direccion: "",
    total: 0,
  });

  const getBuyer = () => new Promise((resolve) =>{ resolve (buyer)}) ; 

  const addItem = async (item) => {
    let index = await cart.findIndex((product) => product.id === item.id);
    console.log("index", index);
    let arrayAux;
    if (index === -1) arrayAux = [...cart, item];
    else
      arrayAux = await cart.map((product) =>
        product.id === item.id
          ? {
              ...product,
              price: product.precio + item.precio,
              cantidad: product.cantidad + item.cantidad,
            }
          : { ...product }
      );
    setCart([...arrayAux]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id != id));
  };

  const addBuyer = (newBuyer) => {
    console.log("valores: ", {...newBuyer,...buyer});
    setBuyer({  ...buyer,...newBuyer });
  };

  const deleteBuyer = () => {
    setBuyer({
      nombre: "",
      apellido: "",
      email: "",
      direccion: "",
      productos: [],
      total: 0,
    });
  };

  const calcularTotal = (items) => {
    console.log("que cae??",items)
    const total = items.reduce((a, b) => a + b.precio, 0);
    console.log("que termina??",total )
    setBuyer({...buyer, total: total, productos_id: items.map(e=> {return {id:e.id, cantidad: e.cantidad}})})
   
  };

  return (
    <ChartContext.Provider
      value={{ cart, addItem, addBuyer, emptyCart, deleteItem, deleteBuyer, getBuyer, calcularTotal,buyer}}
    >
      {children}
    </ChartContext.Provider>
  );
};

export const useCart = () => useContext(ChartContext);
