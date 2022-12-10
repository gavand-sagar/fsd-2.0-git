import React, { useEffect, useState } from "react";

export default function FormDemo() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function login() {
    if (usernameInput == "Sagar" && passwordInput == "123") {
      alert("Welcome");
    }else{
        alert("Invalid")
    }
  }

  function validateUsername(){
    // 
  }

  useEffect(()=>{
    validateUsername();
  },[usernameInput])

  return (
    <div>
      <input onChange={e=>setUsernameInput(e.target.value)} value={usernameInput} />

      <span>Username must contain a number</span>

      <input value={passwordInput} onChange={e=>setPasswordInput(e.target.value)}/>
      <button onClick={login}>Login</button>
      <h1>{usernameInput}</h1>
    </div>
  );
}
