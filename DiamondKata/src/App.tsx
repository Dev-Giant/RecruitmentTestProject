import React, { useState } from 'react';
import './App.css';
import GenerateDiamond from './GenerateDiamond';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState(new Array())
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const generate = () => {
    if(inputValue.length === 1 && alphabet.includes(inputValue.toLowerCase()))
    { 
      setResult(GenerateDiamond(inputValue.toUpperCase())) 
    }
    else {
      window.alert("You have to put one English letter")
    }
  }

  return (
    <div className="App">
      <div>
        <div>
          <input type="text" onChange={handleChange} value={inputValue}/>
          <button onClick={generate}>Generate Diamond</button>
        </div>
        <div>
          {
            result && result.map((item, index) => (
              <p key = {item + index}>{item}</p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
