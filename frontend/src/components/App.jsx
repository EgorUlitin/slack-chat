import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './LoginPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Layout from './Layout.jsx';
import ChatPage from './ChatPage/ChatPage.jsx';
import SingupPage from './SingupPage.jsx';
import AddChannelModal from './Modal/AddChannelModal';

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
          <AddChannelModal />
        </PrivetRoute>)} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SingupPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;