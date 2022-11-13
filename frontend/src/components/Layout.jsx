import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthProvider';

const Layout = () => {
  const auth = useAuth();

  return <div className='h-100 bg-light'>
    <div className='h-100'>
      <div className="h-100">
        <div className='d-flex flex-column h-100'>
          <Navbar expand="xxl" className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <Container>
              <Navbar.Brand as={Link} to="/" expand="lg" variant="light" bg="white">Hexlet Chat</Navbar.Brand>
              {auth.loggedIn && <Button as={Link} to='/login' onClick={auth.logOut}>Выйти</Button>}
            </Container>
          </Navbar>
          <Outlet />
        </div>
      </div>
    </div>
  </div>
}

export default Layout;