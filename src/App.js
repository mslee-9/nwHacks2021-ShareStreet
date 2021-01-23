import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
