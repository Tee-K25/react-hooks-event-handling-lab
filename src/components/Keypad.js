// Code Keypad Component Here
import React from "react";

function Keypad() {
  function passLog(event) {
    event.preventDefault();
    let password = event.target.value;
    console.log("Entering password...");
  }
  return (
    <div>
      <input type="password" onChange={passLog} />
    </div>
  );
}

export default Keypad;
