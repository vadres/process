import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Users from "../pages/users";

const Routes : React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/users" component={Users} />

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
     
    </Router>
  );
}

export default Routes;