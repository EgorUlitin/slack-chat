/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchData } from './fetchData';
import { IMessage } from './messagesSlice';

export interface IChannel {
  id: number
  name: string
  removable: boolean
}

export interface IUserData {
  id: number
  username: string
  password: string
}

export interface IState {
  channels: IChannel[]
  messages: IMessage[]
  currentChannelId: number
  users: IUserData[]
}

const defaultChannelId = 1;

interface IChannelsState {
  channels: IChannel[]
  currentChannelId: number
}

const initialState: IChannelsState = {
  channels: [],
  currentChannelId: defaultChannelId,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannels: (state, action: PayloadAction<IChannel>) => {
      state.channels.push(action.payload);
    },
    switchChannel: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.currentChannelId = id;
    },
    removeChannel: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.channels = state.channels.filter((channel) => id !== channel.id);

      if (id === state.currentChannelId) state.currentChannelId = defaultChannelId;
    },
    renameChannel: (state, action: PayloadAction<{ id: number, name: string }>) => {
      const { id, name } = action.payload;

      state.channels = state.channels
        .map((channel) => (channel.id === id ? { ...channel, name } : channel));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<IState>) => {
        const { channels, currentChannelId } = action.payload;
        state.channels = channels;
        state.currentChannelId = currentChannelId;
      });
  },
});

export const {
  addChannels, switchChannel, removeChannel, renameChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;
