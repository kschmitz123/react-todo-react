import styled from "styled-components";
import Todo from "./Todo";

const Todos = styled.ul`
  padding: 0;
  display: grid;
  justify-items: center;
`;

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <Todos>
      {filteredTodos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          text={todo.text}
          todo={todo}
          key={todo.id}
        />
      ))}
    </Todos>
  );
}
