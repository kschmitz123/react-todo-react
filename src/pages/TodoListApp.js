import "./todoListApp.css";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import { useState, useEffect } from "react";

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
  const name = JSON.parse(localStorage.getItem("name"));
  return (
    <div className="app">
      <header>
        <h1> {`${name}'s Todo List`}</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />

      <Link to="/" onClick={() => localStorage.removeItem("todos")}>
        <Button />
      </Link>
    </div>
  );
}

export default TodoListApp;
