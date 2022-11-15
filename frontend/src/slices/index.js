import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice.js';
import messagesReducer from './messagesSlice.js';
import modalsReducer from './modalsSlice.js';
import { channelsSelector, currentChannelIdSelector, messagesSelector, currentChannelMessagesSelector, typeModalSelector } from './selectors.js';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    modals: modalsReducer,
  },
});

export { channelsSelector, currentChannelIdSelector, messagesSelector, currentChannelMessagesSelector, typeModalSelector }
