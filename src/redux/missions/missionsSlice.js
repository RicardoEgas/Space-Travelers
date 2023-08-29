import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const fetchMissionData = createAsyncThunk(
  'mission/fetchMissionData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data; // Return the array of missions
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    // ...other reducers
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionData.fulfilled, (state, action) => {
      state.missions = action.payload; // Update the missions array
    });
  },
});

export default missionSlice.reducer;
