import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import { useApi } from './ApiProvider';

import { IChildren, IUser, IAuthContext } from '../interfaces';

const getDataFromLocalStorage = () => {
  const value = localStorage.getItem('user');

  if (typeof value === 'string') {
    return JSON.parse(value)?.username ? JSON.parse(value) : {};
  }
  return {};
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: IChildren) {
  const [user, setUser] = useState(getDataFromLocalStorage());
  const { connect, disconnect } = useApi();

  useEffect(() => {
    const { username, token } = user;

    if (username && token) {
      connect();
    } else {
      disconnect();
    }
  }, [user, connect, disconnect]);

  const logIn = useCallback(({ username, token }: IUser) => {
    localStorage.setItem('user', JSON.stringify({ username, token }));
    setUser({ username, token });
  }, []);

  const logOut = useCallback(() => {
    localStorage.clear();
    setUser({} as IUser);
  }, []);

  const value = useMemo(() => ({ logIn, logOut, user }), [logIn, logOut, user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
