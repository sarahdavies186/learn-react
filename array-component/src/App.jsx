import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificLetter(letter) {
   setArray((currentArray) => {
    return currentArray.filter(element => element !== letter)
   })
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("A")}>Remove "A"</button>
      {array.join(", ")}
    </>
  );
}

export default App;
