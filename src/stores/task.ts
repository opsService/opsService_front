import type { TaskStatusType, TaskType } from '@/constants/task';
import type { Task, TaskDetail } from '@/model/task';
import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
  selectedFilter: {
    taskType: 'all' | TaskType;
    status: 'all' | TaskStatusType;
  };
  isSortedLatest: 'true' | 'false';
  page: number;
  totalPage: number;
  taskData: Task[];
  selectedTask: TaskDetail;
}

const initialState: TaskState = {
  selectedFilter: {
    taskType: 'all',
    status: 'all',
  },
  isSortedLatest: 'true',
  page: 1,
  totalPage: 10,
  taskData: [
    {
      taskId: 1,
      taskName: '이미지 분류',
      taskStatus: 'RUNNING',
      taskType: 'train',
      baseModel: {
        modelId: 1,
        modelName: 'ResNet-50',
      },
      createdAt: '2025-08-18',
    },
    {
      taskId: 2,
      taskName: '텍스트 요약',
      taskStatus: 'COMPLETED',
      taskType: 'inference',
      baseModel: {
        modelId: 2,
        modelName: 'BART-large',
      },
      createdAt: '2025-08-17',
    },
    {
      taskId: 3,
      taskName: '객체 감지',
      taskStatus: 'ERROR',
      taskType: 'inference',
      baseModel: {
        modelId: 3,
        modelName: 'YOLO v5',
      },
      createdAt: '2025-08-16',
    },
    {
      taskId: 4,
      taskName: '음성 인식',
      taskStatus: 'COMPLETED',
      taskType: 'train',
      baseModel: {
        modelId: 4,
        modelName: 'Whisper',
      },
      createdAt: '2025-08-16',
    },
    {
      taskId: 5,
      taskName: '감정 분석',
      taskStatus: 'RUNNING',
      taskType: 'inference',
      baseModel: {
        modelId: 5,
        modelName: 'BERT-base',
      },
      createdAt: '2025-08-15',
    },
    {
      taskId: 6,
      taskName: '감정 분석',
      taskStatus: 'RUNNING',
      taskType: 'inference',
      baseModel: {
        modelId: 5,
        modelName: 'BERT-base',
      },
      createdAt: '2025-08-15',
    },
    {
      taskId: 7,
      taskName: '감정 분석',
      taskStatus: 'RUNNING',
      taskType: 'inference',
      baseModel: {
        modelId: 5,
        modelName: 'BERT-base',
      },
      createdAt: '2025-08-15',
    },
  ],
  // selectedTask: {
  //   taskId: 7,
  //   taskName: '감정 분석',
  //   taskStatus: 'RUNNING',
  //   taskType: 'inference',
  //   baseModel: {
  //     modelId: 1,
  //     modelName: 'BERT-base',
  //     createdAt: '2025-08-15',
  //     version: 'v1',
  //     type: 'CUSTOM',
  //   },
  //   createdAt: '2025-08-15',
  //   endpoint: '/api/v1/<url>',
  // },
  selectedTask: {
    taskId: 7,
    taskName: '감정 분석',
    taskStatus: 'RUNNING',
    taskType: 'train',
    baseModel: {
      modelId: 1,
      modelName: 'BERT-base',
    },
    createdAt: '2025-08-15',
  },
};

export const taskSlice = createSlice({
  name: 'task',
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

export const { setFilter, setSort, setPage, setTotalPage } = taskSlice.actions;
export default taskSlice.reducer;
