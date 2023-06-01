export default function Todo({ todo, deleteTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input type="checkbox"/>
        {todo.message}
      </label>
      <button onClick={() => deleteTodo(todo.id) }>Delete</button>
    </li>
  );
}
