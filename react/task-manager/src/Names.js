import React, { useState } from "react";

export default function Names({items,deleteItem}) {
  

  return (
    <div>
      {items.map((x) => (
        <li onClick={() => deleteItem(x)}>{x}</li>
      ))}
    </div>
  );
}
