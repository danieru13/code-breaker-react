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
      <input id="secret-input" type="number" placeholder="Write the secret to be guessed" ref={secretInput}></input>
      <button id="secret-button" onClick={setSecret}>Set Secret</button>

      <input id="guess-input" type="number" placeholder="Write the number to guess" ref={guessInput}></input>
      <button id="guess-button" onClick={guess}>Guess</button>

      <label id="message">{message}</label>
    </div>
  );
}

export default App;
