import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { useContextAuthManager } from "../index";

type Props = {
  exact: boolean;
  path: string;
  component: ComponentType;
};

const PrivateRoute = ({ exact, path, component }: Props) => {
  const { isLoggedIn, publicPath } = useContextAuthManager();

  if (!publicPath) {
    throw new Error('You need to provide "publicPath" prop for AuthManager');
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (!isLoggedIn) {
          return <Redirect to={publicPath} />;
        }

        return <Route path={path} exact={exact} component={component} />;
      }}
    />
  );
};

export default PrivateRoute;
