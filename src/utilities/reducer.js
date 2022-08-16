import { ShakeRow } from "./ShakeRow";

export const initialState = {
  game: { isGameOn: true, isWin: false },
  board: new Array(6).fill(Array(5).fill("")),
  current: { row: 0, pos: 0 },
  correct: undefined,
  wordSet: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START_GAME": {
      // First Game
      if (!state.wordSet) {
        const words = action.payload.WordBank.map((word) => word.toUpperCase());
        return {
          ...state,
          wordSet: words,
          correct: words[Math.floor(Math.random() * words.length)].split(""),
        };
        // Not First Game
      } else {
        return {
          wordSet: state.wordSet,
          board: new Array(6).fill(Array(5).fill("")),
          current: { row: 0, pos: 0 },
          game: { isGameOn: true, isWin: false },
          correct:
            state.wordSet[
              Math.floor(Math.random() * state.wordSet.length)
            ].split(""),
        };
      }
    }
    case "ENTER": {
      if (state.wordSet.includes(state.board[state.current.row].join(""))) {
        if (
          state.board[state.current.row].join("") === state.correct.join("")
        ) {
          //Win game
          return { ...state, game: { isGameOn: false, isWin: true } };
        } else if (state.current.row === 5) {
          //Lose game
          return { ...state, game: { isGameOn: false, isWin: false } };
        }
        // Next word
        return {
          ...state,
          current: { row: state.current.row + 1, pos: 0 },
        };
      } else {
        //wrong word
        ShakeRow(state.current.row);
        return { ...state };
      }
    }
    case "DELETE_LETTER": {
      const newBoard = state.board.map((row, rowId) => {
        return rowId !== state.current.row
          ? row
          : row.map((pos, posId) => {
              return posId !== state.current.pos - 1 ? pos : "";
            });
      });
      return {
        ...state,
        board: newBoard,
        current: { row: state.current.row, pos: state.current.pos - 1 },
      };
    }
    case "ADD_LETTER": {
      const newBoard = state.board.map((row, rowId) => {
        return rowId !== state.current.row
          ? row
          : row.map((pos, posId) => {
              return posId !== state.current.pos ? pos : action.payload.letter;
            });
      });
      return {
        ...state,
        board: newBoard,
        current: { row: state.current.row, pos: state.current.pos + 1 },
      };
    }
    default:
      return { ...state };
  }
};
