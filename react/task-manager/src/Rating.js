import React from "react";

export default function Rating({ value }) {
  return (
    <div>
      <span className={value >= 1 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 2 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 3 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 4 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 5 ? "purple" : "text-gray"}>&#9733;</span>
    </div>
  );
}
