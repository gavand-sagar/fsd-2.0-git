import React from "react";

export default function RoundedButton({ label, active,setLabel,onClick }) {
  
  function getClassName() {
    if (active == true) {
      return "blue";
    } else {
      return "red";
    }
  }

  function showAlert(){
    setLabel();
    onClick();
  }


  return (<button onClick={showAlert} className={getClassName()}>{label}</button>);
}
