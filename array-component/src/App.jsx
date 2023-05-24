import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      {array.join(", ")}
    </>
  );
}

export default App;
