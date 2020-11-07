import styled from "styled-components";
import "./todo.css";

const TodoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  justify-items: center;
  align-items: center;
  width: 90%;
  border: 1px solid black;
  border-radius: 25px;
  margin: 10px;
  padding: 5px;
  background-color: white;
`;
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default function Todo({ text, todo, setTodos, todos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <TodoContainer>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <Button onClick={completeHandler}>✅</Button>
      <Button onClick={deleteHandler}>🗑</Button>
    </TodoContainer>
  );
}
