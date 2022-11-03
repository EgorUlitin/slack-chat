import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './LoginPage.jsx';

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

const App = () => (
  <div className='h-100 bg-light'>
    <div className='h-100'>
      <div className="h-100">
        <div className='d-flex flex-column h-100'>
          <Navbar expand="xxl" className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <Container>
              <Navbar.Brand href="/" expand="lg" variant="light" bg="white">Hexlet Chat</Navbar.Brand>
            </Container>
          </Navbar>
          <AuthProvider>
            <Router>
              <Routes>
                <Route path="/" element={null} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Router>
          </AuthProvider>
        </div>

      </div>
    </div>
  </div>
);

export default App;