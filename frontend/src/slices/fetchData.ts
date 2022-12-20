/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from './channelsSlice';
import routes from '../routes';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const { token } = localStorage.length && JSON.parse(localStorage.user);
    const response = await axios.get(routes.dataPath(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return (await response.data) as IState;
  },
);
