import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useRollbar } from '@rollbar/react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

import { fetchData } from '../../slices/fetchData';
import { useAuth } from '../../contexts/AuthProvider';
import routes from '../../routes';

import ChannelList from './ChannelList';
import MessageBox from './MessageBox';

const ChatPage = () => {
  const dispatch = useAppDispatch();
  const rollbar = useRollbar();
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    dispatch(fetchData())
      .unwrap()
      .catch((error) => {
        if (error.response?.status === 401) {
          logOut();
          navigate(routes.loginPage());
        }
        rollbar.error('Error on fetchData', error);
      });
  }, [dispatch, rollbar, logOut, navigate]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <ChannelList />
        <MessageBox />
      </Row>
    </Container>
  );
};

export default ChatPage;
