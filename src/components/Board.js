import { useContext } from "react";
import { WordleContext } from "../App";
import { Letter } from "./Letter";

export const Board = () => {
  const { wordle } = useContext(WordleContext);
  return (
    <div className="board">
      {wordle.board.map((row, rowId) => {
        if (wordle.current.row > rowId) {
          return (
            <div className="row" key={rowId} id={"row" + rowId}>
              {row.map((elem, elemId) => {
                return (
                  <Letter
                    letterPos={elemId}
                    row={rowId}
                    key={elemId}
                    correct={
                      wordle.correct[elemId] === elem
                        ? "correct"
                        : wordle.correct.includes(elem)
                        ? "almost"
                        : "error"
                    }
                  />
                );
              })}
            </div>
          );
        } else {
          return (
            <div className="row" key={rowId} id={"row" + rowId}>
              {row.map((elem, elemId) => {
                return <Letter letterPos={elemId} row={rowId} key={elemId} />;
              })}
            </div>
          );
        }
      })}
    </div>
  );
};
