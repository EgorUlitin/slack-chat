import React, { useState, useEffect, createContext, useContext } from 'react';
import { useApi } from './ApiProvider';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { connect, disconnect } = useApi();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      connect();
      logIn();
    } else {
      disconnect();
    }
  }, [loggedIn, connect, disconnect])

  const logIn = () => setLoggedIn(true);

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false)
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;