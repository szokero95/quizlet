import { useContext } from "react";
import { WordleContext } from "../App";

export const Letter = ({ letterPos, row, correct }) => {
  const { wordle } = useContext(WordleContext);

  return (
    <div className={"letter " + correct}>{wordle.board[row][letterPos]}</div>
  );
};
