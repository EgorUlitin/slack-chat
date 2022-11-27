import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import { useApi } from './ApiProvider';

const getDataFromLocalStorage = () => (JSON.parse(localStorage.getItem('user'))?.username ? JSON.parse(localStorage.getItem('user')) : {});

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
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

  const logIn = useCallback(({ username, token }) => {
    localStorage.setItem('user', JSON.stringify({ username, token }));
    setUser({ username, token });
  }, []);

  const logOut = useCallback(() => {
    localStorage.clear();
    setUser({});
  }, []);

  const value = useMemo(() => ({ logIn, logOut, user }), [logIn, logOut, user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
