import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoListApp from "./pages/TodoListApp";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todolist">
          <TodoListApp />
        </Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
}
