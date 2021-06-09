import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import CreateProcess from "../pages/process/create";
import ProcessPage from "../pages/process/list";
import EditProcess from "../pages/process/edit";
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
        <Route exact path="/user/edit/:id" component={EditUser} />

        <Route exact path="/process" component={ProcessPage} />
        <Route exact path="/process/create" component={CreateProcess} />
        <Route exact path="/process/edit/:id" component={EditProcess} />
        
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
     
    </Router>
  );
}

export default Routes;