import React, { useState } from "react";

export default function Counter({ start }) {
  const [number,setNumber] = useState(start); // its a hook 

  function increment() {
    setNumber(number + 1) /// this is a function , which will help us to change number variables value
  }

  return (
    <div>
      <button>-</button>
      <span>{number}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
