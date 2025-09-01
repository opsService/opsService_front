import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskSlice, { type TaskState } from './task';
import datasetSlice, { type DatasetState } from './dataset';
import modelSlice, { type ModelState } from './model';

export interface RootState {
  task: TaskState;
  dataset: DatasetState;
  model: ModelState;
}

const rootReducer = combineReducers({
  task: taskSlice,
  dataset: datasetSlice,
  model: modelSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
