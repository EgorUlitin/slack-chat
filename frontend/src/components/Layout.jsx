import { Outlet } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

const Layout = () => {
  return <div className='h-100 bg-light'>
    <div className='h-100'>
      <div className="h-100">
        <div className='d-flex flex-column h-100'>
          <Navbar expand="xxl" className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <Container>
              <Navbar.Brand href="/" expand="lg" variant="light" bg="white">Hexlet Chat</Navbar.Brand>
            </Container>
          </Navbar>
          <Outlet />
        </div>
      </div>
    </div>
  </div>
}

export default Layout;