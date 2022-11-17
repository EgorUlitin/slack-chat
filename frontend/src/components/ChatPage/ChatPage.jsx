import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import { fetchData } from '../../slices/fetchData';
import { channelsSelector } from '../../slices';

import ChannelList from "./ChannelList";
import MessageBox from "./MessageBox";

const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const channels = useSelector(channelsSelector);

  if (!channels || channels.length === 0) {
    return null;
  }

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <ChannelList />
        <MessageBox />
      </Row>
    </Container>
  )
};

export default ChatPage;