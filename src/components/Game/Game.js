import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses/Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  function addGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert(`Only ${NUM_OF_GUESSES_ALLOWED} guesses allowed...`)
      return;
    }
    const newGuess = { guess, id: crypto.randomUUID() };
    setGuesses(guesses => [...guesses, newGuess]);
  }
  return <>
    <Guesses guesses={guesses} />
    <GuessInput addGuess={addGuess} />
  </>;
}

export default Game;
