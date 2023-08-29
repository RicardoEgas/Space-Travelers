import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  status: '',
  error: null,
};

const baseDragonsURL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragonsAsync = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await axios.get(`${baseDragonsURL}`);
    console.log('status is:', response);
    console.log('fetched data is:', response.data);
    return response.data;
  },
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragonsAsync.fulfilled, (state, action) => {
        if (action.payload !== '') {
          const dragons = [];
          const keys = Object.keys(action.payload);
          keys.forEach((keyOfActionPayload) => {
            dragons.push({
              id: keyOfActionPayload,
              ...action.payload[keyOfActionPayload][0],
            });
          });
          state.dragons = dragons;
          if (state.dragons.length === 0) state.error = 'No data was found';
        } else {
          state.error = 'No result';
        }
      });
  },
});

export default dragonsSlice.reducer;
