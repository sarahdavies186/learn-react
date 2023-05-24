import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleUpdateName = (event) => {
    setName(event.target.value);
  }

  const incrementAge = () => {
    setAge(currentAge => currentAge + 1)
  }

  const decrementAge = () => {
    setAge(currentAge => currentAge - 1)
  }

  return (
    <>
      <input type="text" value={name} onChange={handleUpdateName} />
      <button type="submit">Submit</button>
      <br />
      <button onClick={decrementAge}>-</button>
      {age}
      <button onClick={incrementAge}>+</button>
      <br />
      My name is {name} and I am {age} years old
    </>
  );
}

export default App;
