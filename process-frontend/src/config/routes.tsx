import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import CreateUser from "../pages/user/create";
import EditUser from "../pages/user/edit";
import Users from "../pages/user/list";

const Routes : React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/user" component={Users} />
        <Route exact path="/user/create" component={CreateUser} />
        <Route exact path="/user/edit/:edit" component={EditUser} />
        
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
     
    </Router>
  );
}

export default Routes;