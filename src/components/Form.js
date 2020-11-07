import { useState } from "react";
import Button from "./Button";
import styled from "styled-components/macro";

const SubmitButton = styled(Button)`
  grid-area: 1/2;
`;
const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  width: 350px;
  background-color: white;
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

export default function TodoForm({ todos, setTodos, setStatus }) {
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
  );
}
