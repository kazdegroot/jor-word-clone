import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import GuessKeyboard from '../GuessKeyboard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function WonBanner({ nrOfGuesses }) {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{nrOfGuesses} {nrOfGuesses === 1 ? 'guess' : 'guesses'}</strong>.
    </p>
  </div>
}


function LostBanner({ answer }) {
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>;
}

function getWord() {
  const answer = sample(WORDS);
  console.log({ answer });
  return answer;
}

function Game() {
  const [answer, setAnswer] = useState(getWord);
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState('running');

  function resetGame() {
    setAnswer(getWord);
    setGuesses([]);
    setStatus('running');
  }

  const checkedGuesses = guesses.map(({ guess, ...rest }) => ({ ...rest, guess, checked: checkGuess(guess, answer) }))
  function addGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert(`Only ${NUM_OF_GUESSES_ALLOWED} guesses allowed...`)
      return;
    }
    const newGuess = { guess, id: crypto.randomUUID() };
    setGuesses(guesses => [...guesses, newGuess]);
    if (guess === answer) {
      setStatus('won');
      return;
    }

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setStatus('lost');
    }
  }

  return <>
    <button type="button" onClick={resetGame}>Reset the game!!</button>
    <Guesses guesses={checkedGuesses} />
    <GuessInput addGuess={addGuess} disabled={status !== 'running'} />
    <GuessKeyboard guesses={checkedGuesses} />
    {status === 'won' && <WonBanner nrOfGuesses={guesses.length} />}
    {status === 'lost' && <LostBanner answer={answer} />}
  </>;
}

export default Game;
