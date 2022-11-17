import { io } from 'socket.io-client';
import store from './slices';
import { addChannels, switchChannel } from './slices/channelsSlice';
import { addMessage } from './slices/messagesSlice';

const socket = io({ autoConnect: false });

const api = () => {
  const { dispatch } = store;

  socket.on('newChannel', (payload) => dispatch(addChannels(payload)));
  
  socket.on('newMessage', (payload) => dispatch(addMessage(payload)));
  
  const createNewChannel = (name) => socket.emit('newChannel', name, ({ data, status }) => dispatch(switchChannel({ id: data.id })));

  const createMessage = (message) => socket.emit('newMessage', message);
  
  const connect = () => socket.connect();
  
  const disconnect = () => socket.disconnect();

  return {
    connect, disconnect, createNewChannel, createMessage,
  };
}

export default api;