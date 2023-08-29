import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const fetchMissionData = createAsyncThunk(
  'mission/fetchMissionData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    // other reducers
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionData.fulfilled, (state, action) => {
      const missionsData = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
      state.missions = missionsData;
    });
  },
});

export default missionSlice.reducer;
