import { DATA_SET } from '@/data/dataset';
import type { Dataset } from '@/model/dataset';
import { createSlice } from '@reduxjs/toolkit';

export interface DatasetState {
  selectedModel:
    | {
        modelName: string;
        modelId: number;
      }
    | undefined;
  selectedDataset: Dataset[] | undefined;
}

const initialState: DatasetState = {
  selectedModel: undefined,
  selectedDataset: undefined,
};

export const datasetSlice = createSlice({
  name: 'dataset',
  initialState,
  reducers: {
    selectModel: (state, action) => {
      state.selectedModel = action.payload;
      state.selectedDataset =
        DATA_SET[state.selectedModel?.modelId as 1 | 2 | 3];
    },
  },
});

export const { selectModel } = datasetSlice.actions;
export default datasetSlice.reducer;
