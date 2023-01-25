import React from "react";

const KEYBOARD = [
  'QWERTYUIOP',
  'ASDFGHJKL',
  'ZXCVBNM'
];

function guessesToLetterStatus(guesses) {
  const letters = guesses.flatMap(guess => guess?.checked || []);
  return Object.fromEntries(letters.map(({ letter, status }) => [letter, status]));
}

function GuessKeyboard({ guesses }) {
  const letters = guessesToLetterStatus(guesses);
  return <div className="keyboard">
    {KEYBOARD.map((row, index) => <div className="row" key={index}>{row.split('').map((letter, index) => <span key={index} className={`key ${letters[letter] ?? ''}`}>{letter}</span>)}</div>)}
  </div>;
}

export default GuessKeyboard;
