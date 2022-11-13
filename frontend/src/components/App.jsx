import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './LoginPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Layout from './Layout.jsx';
import ChatPage from './ChatPage/ChatPage.jsx';

const PrivetRoute = ({ children }) => {
  const { token } = localStorage.length && JSON.parse(localStorage.user);
  const location = useLocation();

  return (
    token ? children : <Navigate to='/login' state={{ state: location }} />
  )
};

const App = () => (
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
);

export default App;