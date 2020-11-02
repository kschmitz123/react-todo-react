export default function Form() {
  return (
    <form action="">
      <input type="text" />
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
