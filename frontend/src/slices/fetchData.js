import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import routes from '../routes/routes';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const { token } = localStorage.length && JSON.parse(localStorage.user);
    const response = await axios.get(routes.dataPath(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
);
