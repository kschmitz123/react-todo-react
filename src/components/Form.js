import { useState } from "react";
import "./form.css";

export default function Form({ todos, setTodos, setStatus }) {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (event) => setInputText(event.target.value);
  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };
  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form action="" className="todo-form">
      <input
        placeholder="Was gibt's zu tun?"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
      />
      <button className="form-button" onClick={submitTodoHandler} type="submit">
        +
      </button>
      <div className="form-select">
        <select onChange={statusHandler} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
