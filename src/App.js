import { useReducer, createContext, useEffect } from "react";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { GameOver } from "./components/GameOver";
import { initialState, reducer } from "./utilities/reducer";
import { WordBank } from "./utilities/WordBank";

export const WordleContext = createContext();

export default function App() {
  const [wordle, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "START_GAME", payload: { WordBank } });
  }, []);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (wordle.game.isGameOn) {
        //alphabet
        if (e.keyCode > 64 && e.keyCode < 91 && wordle.current.pos < 5) {
          e.preventDefault();
          dispatch({
            type: "ADD_LETTER",
            payload: { letter: e.key.toUpperCase() },
          });
        }
        //enter
        if (
          e.keyCode === 13 &&
          wordle.current.pos === 5 &&
          wordle.current.row < 6
        ) {
          e.preventDefault();
          dispatch({ type: "ENTER" });
        }
        //Delete / Backspace
        if ((e.keyCode === 8 || e.keyCode === 46) && wordle.current.pos > 0) {
          e.preventDefault();
          dispatch({ type: "DELETE_LETTER" });
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [wordle]);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <WordleContext.Provider value={{ wordle, dispatch }}>
          <Board />
          <Keyboard />
          {wordle.game.isGameOn ? <></> : <GameOver win={wordle.game.isWin} />}
        </WordleContext.Provider>
      </div>
    </div>
  );
}
