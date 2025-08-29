import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskSlice, { type TaskState } from './task';
import datasetSlice, { type DatasetState } from './dataset';

export interface RootState {
  task: TaskState;
  dataset: DatasetState;
}

const rootReducer = combineReducers({
  task: taskSlice,
  dataset: datasetSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
