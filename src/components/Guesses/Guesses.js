import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function Guesses({ guesses }) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((index) =>
      <Guess guess={guesses[index]?.guess || ''} key={index} />
    )}
  </div>;
}

export default Guesses;
