import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoListApp from "./pages/TodoListApp";
import Welcome from "./pages/Welcome";
import GlobalStyle from "./GlobalStyle";
export default function App() {
  return (
    <>
      <GlobalStyle />
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
    </>
  );
}
