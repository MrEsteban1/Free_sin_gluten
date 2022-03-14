import { useState } from "react";

export const useCounter = (inicialSate = 0, stock = 0) => {
  const [counter, setCounter] = useState(inicialSate);

  const increment = () => {
    if (counter < stock) setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter !== 0) setCounter(counter - 1);
    console.log(counter);
  };

  return { counter, increment, decrement };
};
