/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState } from './channelsSlice';
import { fetchData } from './fetchData';

export interface IMessage {
  username: string
  body: string
  id: number
  channelId?: number
}

interface IMessageState {
  messages: IMessage[]
}

const initialState: IMessageState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
    },
    removeMessagesByChannelId: (state, action) => {
      const { id } = action.payload;
      state.messages = state.messages.filter(({ channelId }) => channelId !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<IState>) => {
        const { messages } = action.payload;
        state.messages = messages;
      });
  },
});

export const { addMessage, removeMessagesByChannelId } = messagesSlice.actions;

export default messagesSlice.reducer;
