import { io } from 'socket.io-client';
import store from './slices';
import { addChannels, switchChannel, removeChannel, renameChannel } from './slices/channelsSlice';
import { addMessage, removeMessagesByChannelId } from './slices/messagesSlice';

const socket = io({ autoConnect: false });

const api = () => {
  const { dispatch } = store;

  socket.on('newChannel', (payload) => dispatch(addChannels(payload)));
  
  socket.on('newMessage', (payload) => dispatch(addMessage(payload)));

  socket.on('renameChannel', (payload) => dispatch(renameChannel(payload)));

  socket.on('removeChannel', (payload) => {
    dispatch(removeChannel(payload));
    dispatch(removeMessagesByChannelId(payload));
  });
  
  const createNewChannel = (name) => socket.emit('newChannel', name, ({ data, status }) => {
    if (status === 'ok') {
      dispatch(switchChannel({ id: data.id }));
    };
  });

  const apiRenameChannel = (payload) => socket.emit('renameChannel', payload)

  const apiRemoveChannel = (id) => socket.emit('removeChannel', { id });

  const createMessage = (message) => socket.emit('newMessage', message);
  
  const connect = () => socket.connect();
  
  const disconnect = () => socket.disconnect();

  return {
    connect, disconnect, createNewChannel, createMessage, apiRemoveChannel, apiRenameChannel
  };
}

export default api;