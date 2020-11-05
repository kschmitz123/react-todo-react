import "./welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>Todo List</h1>
      <div className="form">
        <h2>Enter your name:</h2>
        <form action="">
          <input type="text" placeholder="Name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
