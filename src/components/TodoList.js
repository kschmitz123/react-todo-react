import Todo from "./Todo";
import "./todoList.css";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <ul className="todos">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
