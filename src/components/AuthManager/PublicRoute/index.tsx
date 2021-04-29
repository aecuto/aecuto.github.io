import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { useContextAuthManager } from "../index";

type Props = {
  exact: boolean;
  path: string;
  component: ComponentType;
};

const PublicRoute = ({ exact, path, component }: Props) => {
  const { isLoggedIn, privatePath } = useContextAuthManager();

  if (!privatePath) {
    throw new Error('You need to provide "privatePath" prop for AuthManger');
  }
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (isLoggedIn) {
          return <Redirect to={privatePath} />;
        }
        return <Route path={path} exact={exact} component={component} />;
      }}
    />
  );
};

export default PublicRoute;
