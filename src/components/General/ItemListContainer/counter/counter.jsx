import React from "react";
import { useCounter } from "../../../CustomHooks/useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter(0);
  return (
    <>
      <div className="number_items">{counter}</div>
      <div>
        <button
          className="button-counter"
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <button
          className="button-counter"
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
