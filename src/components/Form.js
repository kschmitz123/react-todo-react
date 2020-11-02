export default function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (event) => setInputText(event.target.value);
  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };
  return (
    <form action="">
      <input onChange={inputTextHandler} type="text" />
      <button onClick={submitTodoHandler} type="submit">
        <i></i>
      </button>
      <div>
        <select name="todos">
          <option value="all"></option>
          <option value="completed"></option>
          <option value="uncompleted"></option>
        </select>
      </div>
    </form>
  );
}
