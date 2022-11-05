import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './LoginPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Layout from './Layout.jsx';
import ChatPage from './ChatPage.jsx';

import AuthContext from '../contexts/index.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivetRoute = ({ children }) => {

  const { token } = localStorage.length && JSON.parse(localStorage.user);
  const location = useLocation();

  return (
    token ? children : <Navigate to='/login' state={{ state: location }} />
  )
};

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={(
          <PrivetRoute>
            <ChatPage />
          </PrivetRoute>)} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </AuthProvider>
);

export default App;