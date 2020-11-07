import { Link } from "react-router-dom";
import TodoForm from "../components/Form";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import styled, { ThemeProvider } from "styled-components";

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

const yellow = {
  backgroundColor: "#EAD052",
  textColor: "#B37300",
  border: "2px solid #B37300",
};

const blue = {
  backgroundColor: "#5266EA",
  textColor: "#051266",
  border: "2px solid #0920B3",
};
function TodoListApp({ title }) {
  const [theme, setTheme] = useState(blue);

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
  const name = JSON.parse(localStorage.getItem("name"));
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <button
          onClick={() => setTheme(theme === blue ? yellow : blue)}
          type="button"
        >
          Change color
        </button>
        <header>
          <h1> {`${name}'s Todo List`}</h1>
        </header>
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
    </ThemeProvider>
  );
}

export default TodoListApp;
