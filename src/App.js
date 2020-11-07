import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoListApp from "./pages/TodoListApp";
import Welcome from "./pages/Welcome";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todolist">
          <TodoListApp />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}
