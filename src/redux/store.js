import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  mission: missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  rockets: rocketsReducer,
});

export default store;
