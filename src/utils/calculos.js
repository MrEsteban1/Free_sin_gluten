export const calcularTotal = (products) => {
  let total =
    products.length > 1
      ? products.reduce((a, b) => a.price + b.price)
      : products.price;
  console.log("total", total);
  return total;
};
