import React, { useState } from "react";
import { useEffect } from "react";

export default function Product({ name, specifications }) {
  const [active, setActive] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [active]);

  function toggle() {
    setActive(!active);
  }

  function expand() {
    setActive(true);
  }
  

  return (
    <div className="product">
      <h2 onClick={toggle}>{name}</h2>
      <span onClick={expand}>expand</span>
      {active && (
        <ul>
          {specifications.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
      {isLoading && <div>Loading....</div>}
    </div>
  );
}
