import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
