import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, APIRoute } from '../../constants/const';

// %======================== api-actions ========================% //

export const getParts = createAsyncThunk('parts/getParts', async (article, { extra: api }) => {
  const { data } = await api.get(APIRoute.MAIN, {
    params: {
      key: API_KEY,
      number: article
    }
  });
  return data;
});

export const getAnalogues = createAsyncThunk('parts/getAnalogues', async ({ article, brand }, { extra: api }) => {
  const { data } = await api.get(APIRoute.MAIN, {
    params: {
      key: API_KEY,
      number: article,
      brand,
      analogues: 'on'
    }
  });
  return data;
});