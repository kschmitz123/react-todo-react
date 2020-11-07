import { useState } from "react";
import Button from "./Button";
import styled, { ThemeProvider } from "styled-components/macro";

const SubmitButton = styled(Button)`
  grid-area: 1/2;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.buttonColor};
`;
const ChangeButton = styled(Button)`
  width: 80px;
  position: fixed;
  top: 10px;
  left: 40%;
  background-color: ${(props) => props.theme.buttonColor};
`;
const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  width: 350px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 10px;
  border-radius: 25px;
`;
const Input = styled.input`
  font-size: 1.2rem;
  border-radius: 25px;
  &::placeholder {
    text-align: center;
  }
`;
const Select = styled.select`
  width: 50px;
  grid-area: 2/1;
`;
const yellow = {
  backgroundColor: "#EBDD99",
  buttonColor: "#EBAE36",
};

const blue = {
  backgroundColor: "#92A2E9",
  buttonColor: "#5F0AEB",
};
export default function TodoForm({ todos, setTodos, setStatus }) {
  const [inputText, setInputText] = useState("");
  const [theme, setTheme] = useState(yellow);
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
  const name = JSON.parse(localStorage.getItem("name"));
  return (
    <ThemeProvider theme={theme}>
      <ChangeButton
        onClick={() => setTheme(theme === blue ? yellow : blue)}
        type="button"
      >
        Change color
      </ChangeButton>
      <header>
        <h1> {`${name}'s Todo List`}</h1>
      </header>
      <Form action="">
        <Input
          placeholder="Was gibt's zu tun?"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
        />
        <SubmitButton onClick={submitTodoHandler} type="submit">
          +
        </SubmitButton>
        <div>
          <Select onChange={statusHandler} name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Select>
        </div>
      </Form>
    </ThemeProvider>
  );
}
