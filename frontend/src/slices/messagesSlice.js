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

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;