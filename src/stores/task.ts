import type { Task } from '@/model/task';
import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
  selectedFilter: 'all' | 'train' | 'inference';
  isSortedLatest: 'true' | 'false';
  page: number;
  totalPage: number;
  taskData: Task[];
}

const initialState: TaskState = {
  selectedFilter: 'all',
  isSortedLatest: 'true',
  page: 1,
  totalPage: 10,
  taskData: [
    {
      experimentId: 1,
      experimentName: '이미지 분류',
      experimentStatus: 'RUNNING',
      baseModel: 'ResNet-50',
      createdAt: '2025-08-18',
    },
    {
      experimentId: 2,
      experimentName: '텍스트 요약',
      experimentStatus: 'COMPLETED',
      baseModel: 'BART-large',
      createdAt: '2025-08-17',
    },
    {
      experimentId: 3,
      experimentName: '객체 감지',
      experimentStatus: 'ERROR',
      baseModel: 'YOLO v5',
      createdAt: '2025-08-16',
    },
    {
      experimentId: 4,
      experimentName: '음성 인식',
      experimentStatus: 'COMPLETED',
      baseModel: 'Whisper',
      createdAt: '2025-08-16',
    },
    {
      experimentId: 5,
      experimentName: '감정 분석',
      experimentStatus: 'RUNNING',
      baseModel: 'BERT-base',
      createdAt: '2025-08-15',
    },
    {
      experimentId: 6,
      experimentName: '감정 분석',
      experimentStatus: 'RUNNING',
      baseModel: 'BERT-base',
      createdAt: '2025-08-15',
    },
    {
      experimentId: 7,
      experimentName: '감정 분석',
      experimentStatus: 'RUNNING',
      baseModel: 'BERT-base',
      createdAt: '2025-08-15',
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.selectedFilter = action.payload;
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

export const { setFilter, setSort, setPage, setTotalPage } = taskSlice.actions;
export default taskSlice.reducer;
