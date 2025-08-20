import type { TaskStatusType } from '@/constants/task';
import type { ModelDetail } from './model';

export interface Task {
  taskId: number;
  taskName: string;
  taskStatus: TaskStatusType;
  taskType: 'train' | 'inference';
  baseModel: string;
  createdAt: string;
}

export interface TaskDetail {
  taskId: number;
  taskName: string;
  taskStatus: TaskStatusType;
  taskType: 'train' | 'inference';
  baseModel: ModelDetail;
  createdAt: string;
}
