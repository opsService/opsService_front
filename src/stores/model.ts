import type { BaseModelType, ModelTaskType } from '@/model/model';
import { createSlice } from '@reduxjs/toolkit';

export interface ModelState {
  selectedFilter: {
    modelTask: 'all' | ModelTaskType;
    baseModel: 'all' | BaseModelType;
  };
  isSortedLatest: 'true' | 'false';
  page: number;
  totalPage: number;
}

const initialState: ModelState = {
  selectedFilter: {
    modelTask: 'all',
    baseModel: 'all',
  },
  isSortedLatest: 'true',
  page: 1,
  totalPage: 10,
};

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.selectedFilter = {
        ...state.selectedFilter,
        [key]: value,
      };
    },
    setSort: (state, action) => {
      state.isSortedLatest = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
  },
});

export const { setFilter, setSort, setPage, setTotalPage } = modelSlice.actions;
export default modelSlice.reducer;
