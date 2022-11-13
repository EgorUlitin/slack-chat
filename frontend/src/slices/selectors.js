export const channelsSelector = (state) => state.channels.channels;

export const currentChannelIdSelector = (state) => state.channels.currentChannelId;

export const messagesSelector = (state) => state.messages.messages;

export const currentChannelMessagesSelector = (state) => state.messages.messages.filter(({ channelId }) => state.channels.currentChannelId === channelId);
