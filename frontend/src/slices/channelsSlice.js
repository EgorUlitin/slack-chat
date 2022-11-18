import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './fetchData.js'

const defaultChannelId = 1;

const initialState = {
  channels: [],
  currentChannelId: defaultChannelId,
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
    removeChannel: (state, action) => {
      const { id } = action.payload;
      state.channels = state.channels.filter(channel => id !== channel.id);

      if (id === state.currentChannelId) state.currentChannelId = defaultChannelId;
    }
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

export const { addChannels, switchChannel, removeChannel } = channelsSlice.actions;

export default channelsSlice.reducer;