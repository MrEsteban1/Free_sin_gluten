import { useState } from "react";

export const useCounter = (inicialSate = 0) => {
  const [counter, setCounter] = useState(inicialSate);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return { counter, increment, decrement };
};
