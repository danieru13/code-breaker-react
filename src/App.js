import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const SECRET_URL_API = "http://localhost:3000/setSecret/";
  const GUESS_URL_API = "http://localhost:3000/guess/";

  const secretInput = useRef(null);
  const guessInput = useRef(null);

  const [ message, setMessage] = useState("");


  const setSecret = async () => {
    const input = secretInput.current.value;

    const res = await fetch(SECRET_URL_API + input);
    const data = await res.json();

    setMessage(data.message);
  }

  const guess = async () => {
    const input = guessInput.current.value;

    const res = await fetch(GUESS_URL_API + input);
    const data = await res.json();

    setMessage(data.result);
  }

  return (
    <div className="App">
    <input type="number" ref={secretInput}></input>
    <button onClick={setSecret}>Set Secret</button>
    <input type="number" ref={guessInput}></input>
    <button onClick={guess}>Guess</button>
    <label>{message}</label>
    </div>
  );
}

export default App;
