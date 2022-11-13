import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './fetchData.js'

const initialState = {
  channels: [],
  currentChannelId: 1,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannels: (state, action) => {
      state.channels.push(action.payload);
    },
    switchChannel: (state, action) => {
      const { id } = action.payload;
      state.currentChannelId = id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const { channels, currentChannelId } = action.payload;
        state.channels = channels;
        state.currentChannelId = currentChannelId;
      })
  },
});

export const { addChannels, switchChannel } = channelsSlice.actions;

export default channelsSlice.reducer;