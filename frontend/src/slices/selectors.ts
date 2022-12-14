import { RootState } from './index';

export const channelsSelector = (state: RootState) => state.channels.channels;

export const currentChannelIdSelector = (state: RootState) => state.channels.currentChannelId;

export const currentChannel = (state: RootState) => state.channels.channels
  .find(({ id }) => state.channels.currentChannelId === id);

export const messagesSelector = (state: RootState) => state.messages.messages;

export const currentChannelMessagesSelector = (state: RootState) => state.messages.messages
  .filter(({ channelId }) => state.channels.currentChannelId === channelId);

export const typeModalSelector = (state: RootState) => state.modals.type;

export const dataModalSelector = (state: RootState) => state.modals.data;
