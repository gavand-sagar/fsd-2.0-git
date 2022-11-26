import React, { useState } from "react";

export default function Rating({ratingChanged}) {
  const [value, setValue] = useState(0);
  function one() {
    setValue(1)
    ratingChanged(1)
  }
  function two(){
    setValue(2)
    ratingChanged(2)
  }
  function three(){
    setValue(3)
    ratingChanged(3)
  }
  function four(){
    setValue(4)
    ratingChanged(4)
  }
  function five(){
    setValue(5)
    ratingChanged(5)
  }
  return (
    <div>
      <span onClick={one} className={value >= 1 ? "purple" : "text-gray"}>&#9733;</span>
      <span onClick={two} className={value >= 2 ? "purple" : "text-gray"}>&#9733;</span>
      <span onClick={three} className={value >= 3 ? "purple" : "text-gray"}>&#9733;</span>
      <span onClick={four} className={value >= 4 ? "purple" : "text-gray"}>&#9733;</span>
      <span onClick={five} className={value >= 5 ? "purple" : "text-gray"}>&#9733;</span>
    </div>
  );
}
