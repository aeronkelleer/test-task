import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, APIRoute } from '../../constants/const';

// %======================== api-actions ========================% //

export const getParts = createAsyncThunk('parts/getParts', async (article, { extra: api, rejectWithValue }) => {
  const { data } = await api.get(APIRoute.MAIN, {
    params: {
      key: API_KEY,
      number: article
    }
  });

  if (data.error) {
    return rejectWithValue(data.error);
  }

  return data;
});

export const getAnalogues = createAsyncThunk('parts/getAnalogues', async ({ article, brand }, { extra: api, rejectWithValue }) => {
  const { data } = await api.get(APIRoute.MAIN, {
    params: {
      key: API_KEY,
      number: article,
      brand,
      analogues: 'on'
    }
  });

  if (data.error) {
    return rejectWithValue(data.error);
  }

  return data;
});