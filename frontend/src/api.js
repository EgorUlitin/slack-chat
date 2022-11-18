import { io } from 'socket.io-client';
import store from './slices';
import { addChannels, switchChannel, removeChannel } from './slices/channelsSlice';
import { addMessage, removeMessagesByChannelId } from './slices/messagesSlice';

const socket = io({ autoConnect: false });

const api = () => {
  const { dispatch } = store;

  socket.on('newChannel', (payload) => dispatch(addChannels(payload)));
  
  socket.on('newMessage', (payload) => dispatch(addMessage(payload)));

  socket.on('removeChannel', (data) => {
    dispatch(removeChannel(data));
    dispatch(removeMessagesByChannelId(data));
  })
  
  const createNewChannel = (name) => socket.emit('newChannel', name, ({ data, status }) => {
    if (status === 'ok') {
      dispatch(switchChannel({ id: data.id }));
    };
  });

  const apiRemoveChannel = (id) => socket.emit('removeChannel', { id });

  const createMessage = (message) => socket.emit('newMessage', message);
  
  const connect = () => socket.connect();
  
  const disconnect = () => socket.disconnect();

  return {
    connect, disconnect, createNewChannel, createMessage, apiRemoveChannel
  };
}

export default api;