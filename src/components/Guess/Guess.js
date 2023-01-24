import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  return <span className={`cell ${status ?? ''}`}>{letter}</span>
}

function Guess({ guess }) {
  return <div className="guess">
    {range(5).map(i => <Cell key={i} {...(guess.checked?.[i] ?? {})} />)}
  </div>;
}

export default Guess;
