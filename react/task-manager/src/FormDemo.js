import React, { useState } from "react";

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

  return (
    <div>
      <input onChange={e=>setUsernameInput(e.target.value)} value={usernameInput} />
      <input value={passwordInput} onChange={e=>setPasswordInput(e.target.value)}/>
      <button onClick={login}>Login</button>
      <h1>{usernameInput}</h1>
    </div>
  );
}
