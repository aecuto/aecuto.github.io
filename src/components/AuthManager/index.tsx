import {
  useEffect,
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";
import { useHistory } from "react-router-dom";

import { getToken, removeToken } from "utils/auth";
import { getMe } from "services/auth";
import { getPath } from "utils/path";

type RouteType = {
  publicPath: string;
  privatePath: string;
};

type Props = {
  children: ReactNode;
} & RouteType;

type ContectType = {
  user: object;
  isLoggedIn: boolean;
  setIsLoggedIn: Function;
} & RouteType;

export const AuthManagerContext = createContext({} as ContectType);

const AuthManager = ({ children, publicPath, privatePath }: Props) => {
  const history = useHistory();
  const token = getToken();
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (token) {
      setIsVerifying(true);
      getMe()
        .then((res) => {
          setIsLoggedIn(true);
          setIsVerifying(false);
          setUser(res.data);
        })
        .catch((error) => {
          if (error.statusCode === 401) {
            removeToken();
            setIsLoggedIn(false);
            setIsVerifying(false);
          }
        });
    } else {
      setIsVerifying(false);
      setIsLoggedIn(false);
    }
  }, [history, token]);

  return (
    <AuthManagerContext.Provider
      value={{
        user,
        isLoggedIn,
        publicPath: getPath(publicPath),
        privatePath: getPath(privatePath),
        setIsLoggedIn,
      }}
    >
      {!isVerifying && children}
    </AuthManagerContext.Provider>
  );
};

export const useContextAuthManager = () => {
  const context = useContext(AuthManagerContext);
  return context;
};

export default AuthManager;
