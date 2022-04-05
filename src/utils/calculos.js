export const calcularTotal = (products) => {
  let total =
    products.length > 1
      ? products.reduce((a, b) => a.precio + b.precio)
      : products[0].precio;
  console.log("total", products);
  return total;
};
