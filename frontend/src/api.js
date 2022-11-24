import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
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
  
  const createNewChannel = (t) => (name) => socket.emit('newChannel', name, ({ data, status }) => {
    if (status === 'ok') {
      dispatch(switchChannel({ id: data.id }));
      toast.success(t('toast.addChannel.succes'));
    };
  });

  const apiRenameChannel = (t) => (payload) => socket.emit('renameChannel', payload, ({ status }) => {
    if (status === 'ok') {
      toast.success(t('toast.renameChannel.succes'));
    }
  });

  const apiRemoveChannel = (t) => (id) => socket.emit('removeChannel', { id }, ({ status }) => {
    if (status === 'ok') {
      toast.success(t('toast.removeChannel.succes'));
    };
  });

  const createMessage = (message) => socket.emit('newMessage', message);
  
  const connect = () => socket.connect();
  
  const disconnect = () => socket.disconnect();

  return {
    connect, disconnect, createNewChannel, createMessage, apiRemoveChannel, apiRenameChannel
  };
}

export default api;