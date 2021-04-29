import AuthManager from "components/AuthManager";
// import PrivateRoute from "components/AuthManager/PrivateRoute";
import PublicRoute from "components/AuthManager/PublicRoute";
import routePaths from "constants/route-paths";
import Home from "pages/Home";
import { Switch } from "react-router-dom";

const Routes = () => {
  return (
    <AuthManager publicPath={routePaths.LOGIN} privatePath={routePaths.HOME}>
      <Switch>
        <PublicRoute exact path={routePaths.HOME} component={Home} />
      </Switch>
    </AuthManager>
  );
};

export default Routes;
