import React, { useState } from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = useState('');
  function onSubmit(e) {
    e.preventDefault();

    if (guess.length !== 5) {
      alert('Needs to be 5 chars...');
      return;
    }

    addGuess(guess);
    setGuess('');
  }
  return <form className="guess-input-wrapper" onSubmit={onSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      id="guess-input"
      type="text"
      value={guess}
      onChange={e => setGuess(e.target.value.toUpperCase())}
      minLength={5}
      maxLength={5}
      required />
  </form>;
}

export default GuessInput;
