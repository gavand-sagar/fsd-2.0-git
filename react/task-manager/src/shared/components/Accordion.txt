import React, { useState } from "react";

//object destructuring
export default function Accordion({ header, body }) {
  const [active, setActive] = useState(true);

  function toggle() {
    if (active == true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  return (
    <div className="accordion-container">
      <div onClick={toggle} className="accordion-header">
        {header}
      </div>
      <div className={active ? "accordion-body" : "accordion-body hidden"}>
        {body}
      </div>
    </div>
  );
}
