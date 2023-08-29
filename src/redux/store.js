import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';

const rootReducer = combineReducers({
  mission: missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
