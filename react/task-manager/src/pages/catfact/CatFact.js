import React from "react";
import { useState } from "react";

export default function CatFact() {
  const [fact, setFact] = useState("");

  function getFact() {
    console.log('A')
    commonFetch("https://catfact.ninja/fact").then((response) => {
      setFact(response.fact);
    });
    console.log('B')
  }


  async function getFactAsync() {
    console.log('A')
    let response = await commonFetch("https://catfact.ninja/fact");
    setFact(response.fact);      
    console.log('B')
  }

  return (
    <div>
      <button onClick={getFact}>Get Cat Fact</button>
      <br></br>

      <p>{fact}</p>
    </div>
  );
}
