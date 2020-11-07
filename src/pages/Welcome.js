import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  display: grid;
  place-content: center;
  justify-items: center;
  height: 100vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
`;
const Input = styled.input`
  border-radius: 25px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  &::placeholder {
    text-align: center;
  }
`;
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
    <Container>
      <h1>Todo List</h1>

      <h2>Enter your name:</h2>
      <Form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={title}
          onChange={handleChange}
        />
        <Button type="submit">Go</Button>
      </Form>
    </Container>
  );
}
