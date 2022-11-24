import React from "react";

export default function RoundedButton({ label, active }) {
  function getClassName() {
    if (active == true) {
      return "blue";
    } else {
      return "red";
    }
  }

//   function getLabel(){
//     if(active == true){
//         return label
//     }else{
//         return 'NA'
//     }
//   }

  return <div className={getClassName()}>{label}</div>;
}
