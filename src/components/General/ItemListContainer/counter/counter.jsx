import React, { useState } from "react";
import { useCounter } from "../../../CustomHooks/useCounter";
import "./style.css";

const Counter = ({ counter, increment, decrement, handlerAdd }) => {
  //const { counter, increment, decrement } = useCounter(0);
  const [addToChart, setAdd] = useState(true);

  const activeAddHandler = () => {
    let state;
    if (counter > 0) {
      state = true;
      handlerAdd();
    } else state = false;

    setAdd(state);
  };

  return (
    <div className="counter-screen">
      <div className="number_items"> <span>{counter}</span></div>
      <div className="counter-buttons">
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
      <button className="button-addItem" onClick={activeAddHandler}>
        Agregar
      </button>
      {!addToChart && (
        <div className="warning-noItems">No hay productos que agregar.</div>
      )}
    </div>
  );
};

export default Counter;
