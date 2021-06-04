import { BrowserRouter, Route } from "react-router-dom";
import Login from "../pages/login";

const Routes : React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} />
    </BrowserRouter>
  );
}

export default Routes;