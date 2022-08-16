import { Key } from "./Key";

export const Keyboard = () => {
  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line">
        {key1.map((key) => {
          return <Key keyVal={key} key={key} />;
        })}
      </div>
      <div className="line">
        {key2.map((key) => {
          return <Key keyVal={key} key={key} />;
        })}
      </div>
      <div className="line">
        <Key keyVal={"ENTER"} isLong />
        {key3.map((key) => {
          return <Key keyVal={key} key={key} />;
        })}
        <Key keyVal={"DELETE"} isLong />
      </div>
    </div>
  );
};
