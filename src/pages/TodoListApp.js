import { Link } from "react-router-dom";
import TodoForm from "../components/Form";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  place-content: center;
  text-align: center;
`;

const HomeButton = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

function TodoListApp({ title }) {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <Container>
      <TodoForm todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
      <Link to="/" onClick={() => localStorage.removeItem("todos")}>
        <HomeButton>Home</HomeButton>
      </Link>
    </Container>
  );
}

export default TodoListApp;
