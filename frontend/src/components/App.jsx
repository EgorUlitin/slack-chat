import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import Layout from './Layout';
import ChatPage from './ChatPage/ChatPage';
import SingupPage from './SingupPage';
import ModalComponent from './Modals/index';

function PrivetRoute({ children }) {
  const { token } = localStorage.length && JSON.parse(localStorage.user);
  const location = useLocation();

  return (
    token ? children : <Navigate to="/login" state={{ state: location }} />
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={(
            <PrivetRoute>
              <ChatPage />
              <ModalComponent />
            </PrivetRoute>
          )}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SingupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
