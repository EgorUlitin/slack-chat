export const channelsSelector = (state) => state.channels.channels;

export const currentChannelIdSelector = (state) => state.channels.currentChannelId;

export const currentChannel = (state) => state.channels.channels.find(({ id }) => state.channels.currentChannelId === id);

export const messagesSelector = (state) => state.messages.messages;

export const currentChannelMessagesSelector = (state) => state.messages.messages.filter(({ channelId }) => state.channels.currentChannelId === channelId);

export const typeModalSelector = (state) => state.modals.type;

export const dataModalSelector = (state) => state.modals.data;
