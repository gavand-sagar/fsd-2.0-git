import React, { useState } from "react";

export default function Counter({ start, counterChanged }) {
  const [number, setNumber] = useState(start); // its a hook

  function increment() {
    counterChanged(number + 1);
    setNumber(number + 1); /// this is a function , which will help us to change number variables value
  }

  function decrement() {
    setNumber(number - 1); /// this is a function , which will help us to change number variables value
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{number}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
