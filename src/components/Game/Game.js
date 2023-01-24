import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  function addGuess(guess) {
    const newGuess = { guess, id: crypto.randomUUID() };
    setGuesses(guesses => [...guesses, newGuess]);
  }
  return <>
    <Guesses guesses={guesses} />
    <GuessInput addGuess={addGuess} />
  </>;
}

export default Game;
