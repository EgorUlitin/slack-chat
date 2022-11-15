import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import { fetchData } from '../../slices/fetchData';
import { openModal } from '../../slices/modalsSlice';
import { channelsSelector, currentChannelIdSelector, messagesSelector } from '../../slices';

import ChannelList from "./ChannelList";
import ChannelTitle from "./ChannelTitle";
import MessageBox from "./MessageBox";
import MessageInput from "./MessageInput";

const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const channels = useSelector(channelsSelector);

  const messages = useSelector(messagesSelector);

  const currentChannel = useSelector(currentChannelIdSelector);

  if (!channels || channels.length === 0) {
    return null;
  }

  const { name } = channels.filter(({ id }) => id === currentChannel)[0];

  return <Container className="h-100 my-4 overflow-hidden rounded shadow">
    <Row className="h-100 bg-white flex-md-row">
      <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
        <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
          <span>Каналы</span>
          <button onClick={() => dispatch(openModal({ type: 'add' }))} type="button" className="p-0 text-primary btn btn-group-vertical">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
            </svg>
            <span className="visually-hidden">+</span>
          </button>
        </div>
        <ChannelList />
      </div>
      <div className="col p-0 h-100">
        <div className="d-flex flex-column h-100">
          <ChannelTitle name={name} count={messages.length} />
          <MessageBox />
          <MessageInput />
        </div>
      </div>
    </Row>
  </Container >
}

export default ChatPage;