import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './fetchData.js'

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    removeMessagesByChannelId: (state, action) => {
      const { id } = action.payload;
      state.messages = state.messages.filter(({ channelId }) => channelId !== id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const { messages } = action.payload;
        state.messages = messages;
      })
  },
});

export const { addMessage, removeMessagesByChannelId } = messagesSlice.actions;

export default messagesSlice.reducer;