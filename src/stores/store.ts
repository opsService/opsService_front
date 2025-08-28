import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskSlice, { type TaskState } from './task';

export interface RootState {
  task: TaskState;
}

const rootReducer = combineReducers({
  task: taskSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
