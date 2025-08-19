import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonSlice, { type CommonState } from './common';
import taskSlice, { type TaskState } from './task';

export interface RootState {
  common: CommonState;
  task: TaskState;
}

const rootReducer = combineReducers({
  common: commonSlice,
  task: taskSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
