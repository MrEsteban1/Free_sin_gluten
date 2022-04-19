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
    setBuyer({ ...buyer, ...newBuyer });
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

  const calculateTotal = (items) => {
    items.reduce((a, b) => a + b, 0);
  };

  return (
    <ChartContext.Provider
      value={{ cart, addItem, addBuyer, emptyCart, deleteItem, deleteBuyer }}
    >
      {children}
    </ChartContext.Provider>
  );
};

export const useCart = () => useContext(ChartContext);
