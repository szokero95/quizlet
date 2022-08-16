import { useContext } from "react";
import { WordleContext } from "../App";

export const Key = ({ keyVal, isLong = false }) => {
  const { dispatch } = useContext(WordleContext);
  const handleClick = () => {
    switch (keyVal) {
      case "ENTER": {
        dispatch({ type: "ENTER" });
        break;
      }
      case "DELETE": {
        dispatch({ type: "DELETE_LETTER" });
        break;
      }
      default: {
        dispatch({
          type: "ADD_LETTER",
          payload: { letter: keyVal },
        });
      }
    }
  };
  return (
    <div className={isLong ? "key longKey " : "key "} onClick={handleClick}>
      {keyVal}
    </div>
  );
};
