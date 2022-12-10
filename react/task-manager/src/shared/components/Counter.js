import React, { useEffect, useState } from "react";

export default function Counter({ start }) {  
  const [number, setNumber] = useState(start); // its a hook

  const [spanStyles, setSpanStyles] = useState({
    position: "fixed",
    left: "0px",
  });
  function increment() {
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1); 
    
    setSpanStyles({
      position: "fixed",
      left: (number * 10) + "px",
    })
    /// this is a function , which will help us to change number variables value
  }

  function decrement() {
    setNumber(number - 1); /// this is a function , which will help us to change number variables value
  }

  // useEffect(()=>{

  //   let abc = <asdf></asdf>
    
  // },[])

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={spanStyles}>{number}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
