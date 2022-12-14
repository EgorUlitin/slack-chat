import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import store from './slices';
import {
  addChannels, switchChannel, removeChannel, renameChannel,
} from './slices/channelsSlice';
import { addMessage, removeMessagesByChannelId } from './slices/messagesSlice';
import { IMessage } from './interfaces';

const api = () => {
  const socket = io({ autoConnect: false });
  const { dispatch } = store;

  socket.on('newChannel', (payload) => dispatch(addChannels(payload)));

  socket.on('newMessage', (payload) => dispatch(addMessage(payload)));

  socket.on('renameChannel', (payload) => dispatch(renameChannel(payload)));

  socket.on('removeChannel', (payload) => {
    dispatch(removeChannel(payload));
    dispatch(removeMessagesByChannelId(payload));
  });

  const createNewChannel = (t: Function) => (name: string) => socket.emit('newChannel', name, ({ data, status }: { data: { id: number }, status: string }) => {
    if (status === 'ok') {
      dispatch(switchChannel({ id: data.id }));
      toast.success(t('toast.addChannel.succes'));
    }
  });

  const apiRenameChannel = (t: Function) => (payload: { name: string, id: number }) => socket.emit('renameChannel', payload, ({ status }: { status: string }) => {
    if (status === 'ok') {
      toast.success(t('toast.renameChannel.succes'));
    }
  });

  const apiRemoveChannel = (t: Function) => (id: number) => socket.emit('removeChannel', { id }, ({ status }: { status: string }) => {
    if (status === 'ok') {
      toast.success(t('toast.removeChannel.succes'));
    }
  });

  const createMessage = (message: IMessage) => socket.emit('newMessage', message);

  const connect = () => socket.connect();

  const disconnect = () => socket.disconnect();

  return {
    connect, disconnect, createNewChannel, createMessage, apiRemoveChannel, apiRenameChannel,
  };
};

export default api;
