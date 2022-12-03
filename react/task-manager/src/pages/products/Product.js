import React from "react";

export default function Product({ name, specifications }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <ul>
        {specifications.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}
