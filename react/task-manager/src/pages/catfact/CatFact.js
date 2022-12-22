import React, { useEffect } from "react";
import { useState } from "react";

export default function CatFact() {
  const [fact, setFact] = useState("");

  function getFact() {
    console.log('A')

    getMobiles().then((mobiles)=>{
      //mobiles are available here and will be there after 3000 millis
      
    })
    // commonFetch("https://catfact.ninja/fact").then((response) => {
    //   setFact(response.fact);
    // });
    console.log('B')
  }


  useEffect(()=>{
    //this is on page load
  },[])

  useEffect(()=>{
    //this is on page load
    // as well as when fact changes
  },[fact])



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
