export default function Todo({ todo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input type="checkbox"/>
        {todo.message}
      </label>
    </li>
  );
}
