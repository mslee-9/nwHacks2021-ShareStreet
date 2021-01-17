import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import CreateNewRequest from "./pages/newrequest";
import CreateNewOffer from "./pages/newoffer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/requestform" component={CreateNewRequest} />
        <Route path="/offerform" component={CreateNewOffer} />
      </Switch>
    </Router>
  );
}

export default App;
