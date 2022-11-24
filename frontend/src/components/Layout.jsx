import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthProvider';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  return <div className='h-100 bg-light'>
    <div className='h-100'>
      <div className="h-100">
        <div className='d-flex flex-column h-100'>
          <Navbar expand="xxl" className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <Container>
              <Navbar.Brand as={Link} to="/" expand="lg" variant="light" bg="white">{t('navBar.brand')}</Navbar.Brand>
              {auth.user.username && <Button as={Link} to='/login' onClick={auth.logOut}>{t('navBar.exit')}</Button>}
            </Container>
          </Navbar>
          <Outlet />
        </div>
        <ToastContainer />
      </div>
    </div>
  </div>
}

export default Layout;