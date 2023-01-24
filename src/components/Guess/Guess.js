import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return <div className="guess">
    {range(5).map(i =>
      <span className="cell" key={i}>{guess[i] || ''}</span>
    )}
  </div>;
}

export default Guess;
