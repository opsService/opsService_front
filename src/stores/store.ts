import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonSlice, { type CommonState } from './common';

export interface RootState {
  common: CommonState;
}

const rootReducer = combineReducers({
  common: commonSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
