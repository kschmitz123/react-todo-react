import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
  const history = useHistory();
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", JSON.stringify(title));
    history.push("/todolist");
  };
  return (
    <div className="welcome">
      <h1>Todo List</h1>
      <div className="entry-form">
        <h2>Enter your name:</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="entry-input"
            type="text"
            placeholder="Name"
            value={title}
            onChange={handleChange}
          />
          <button className="form-button" type="submit">
            Go
          </button>
        </form>
      </div>
    </div>
  );
}
