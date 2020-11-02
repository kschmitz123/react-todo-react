export default function Form({ setInputText }) {
  const inputTextHandler = (event) => setInputText(event.target.value);
  return (
    <form action="">
      <input onChange={inputTextHandler} type="text" />
      <button type="submit">
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
