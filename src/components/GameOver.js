import { useContext } from "react";
import { WordleContext } from "../App";

export const GameOver = ({ win }) => {
  const { wordle, dispatch } = useContext(WordleContext);
  return (
    <div className="modal">
      <div className="gameover">
        <h3>{win ? "You won" : "You Lost"}</h3>
        <p>Answer is: {wordle.correct.join("")}</p>
        <button onClick={() => dispatch({ type: "START_GAME" })}>
          Restart
        </button>
      </div>
    </div>
  );
};
