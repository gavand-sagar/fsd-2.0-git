import React from "react";

export default function RoundedButton({ children, active, setLabel, onClick}) {
  const getClassName = () => {
    if (active == true) {
      return "blue";
    } else {
      return "red";
    }
  }

  function showAlert() {
    setLabel && setLabel();
    onClick && onClick();
    
    console.log("some other useful code");
  }

  return (
    <button onClick={showAlert} className={getClassName()}>
      {children}
    </button>
  );
}
