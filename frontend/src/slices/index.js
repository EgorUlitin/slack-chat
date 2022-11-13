import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice.js';
import messagesReducer from './messagesSlice.js';
import { channelsSelector, currentChannelIdSelector, messagesSelector, currentChannelMessagesSelector } from './selectors.js';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
  },
});

export { channelsSelector, currentChannelIdSelector, messagesSelector, currentChannelMessagesSelector }
