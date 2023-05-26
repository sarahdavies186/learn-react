import { useState } from "react";
import "./styles.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id:crypto.randomUUID(), message: newTodo, completed: false }
      ]
    })
  }

  // console.log(todos);

  return (
    <>
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <input type="text" id="todo" placeholder="add todo" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
}

export default App;
