import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [warning, setWarning] = useState("");

  /* You will need some function to handle the key pressed and button events */
  function onA(e) {
    setNum1(e.target.value);
  }
  function onB(e) {
    setNum2(e.target.value);
  }
  function addition(e) {
    const numA = parseFloat(num1);
    const numB = parseFloat(num2);
    if (isNaN(numA) || isNaN(numB)) {
      setWarning("A and B shall be numbers");
      setResult(null);
    } else {
      setWarning(null);
      setResult(numA + numB);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={num1} onChange={onA} />

      <label>B =</label>
      <input type="text" value={num2} onChange={onB}/>

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={warning || result || ""}/>
      <button onClick={addition}>Compute</button>
    </main>
  );
}

export default App;
