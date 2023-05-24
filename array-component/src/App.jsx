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
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clearArray() {
    setArray([]);
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("A")}>Remove "A"</button>
      <br />
      <button onClick={() => addLetterToStart("Z")}>Add "Z" to start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add "Z" to end</button>
      <br />
      <button onClick={clearArray}>Clear letters</button>
      <br />
      {array.join(", ")}
    </>
  );
}

export default App;
