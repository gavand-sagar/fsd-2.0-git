import React, { useState } from "react";

export default function TikTok() {
  const [label, setLabel] = useState("OFF");

  function toggle() {
    if (label == "ON") {
      setLabel("OFF");
    } else {
      setLabel("ON");
    }
  }

  return (
    <div>
      <button onClick={toggle}>Click</button>
      <span>{label}</span>
    </div>
  );
}
