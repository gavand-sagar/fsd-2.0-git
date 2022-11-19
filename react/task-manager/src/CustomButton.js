import React, { useState } from "react";

export default function CustomButton({ text, isOrange }) {
  const [active, setActive] = useState(isOrange);
  
  function toggle() {
    if (active == true) {
      setActive(false);      
    } else {
      setActive(true);
    }
  }

  return (
    <div onClick={toggle} className={active ? "custom-orange-button" : "custom-green-button"}>
      {text}
    </div>
  );
}
