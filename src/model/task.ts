import type { TaskStatusType } from '@/constants/task';

export interface Task {
  experimentId: number;
  experimentName: string;
  experimentStatus: TaskStatusType;
  baseModel: string;
  createdAt: string;
}
