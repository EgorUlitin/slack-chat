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

const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export {
  channelsSelector,
  currentChannelIdSelector,
  messagesSelector,
  currentChannelMessagesSelector,
  typeModalSelector,
  currentChannel,
  dataModalSelector,
};
