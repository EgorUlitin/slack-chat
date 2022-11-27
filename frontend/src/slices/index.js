import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';
import modalsReducer from './modalsSlice';
import {
  channelsSelector,
  currentChannelIdSelector,
  messagesSelector,
  currentChannelMessagesSelector,
  typeModalSelector,
  currentChannel,
  dataModalSelector,
} from './selectors';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    modals: modalsReducer,
  },
});

export {
  channelsSelector,
  currentChannelIdSelector,
  messagesSelector,
  currentChannelMessagesSelector,
  typeModalSelector,
  currentChannel,
  dataModalSelector,
};
