import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../contexts/AuthProvider';
import routes from '../routes';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    <div className="h-100 bg-light">
      <div className="h-100">
        <div className="h-100">
          <div className="d-flex flex-column h-100">
            <Navbar expand="xxl" className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <Container>
                <Navbar expand="lg" variant="light" bg="white">
                  <Navbar.Brand as={Link} to={routes.indexPage()}>{t('navBar.brand')}</Navbar.Brand>
                </Navbar>
                {auth.user.username && <Nav.Link as={Link} to={routes.loginPage()} onClick={auth.logOut}>{t('navBar.exit')}</Nav.Link>}
              </Container>
            </Navbar>
            <Outlet />
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
