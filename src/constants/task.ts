import { Bot, Brain } from 'lucide-react';

export const TASK_STATUS = {
  PENDING: {
    label: '대기중',
    color: 'yellow',
  },
  RUNNING: {
    label: '실행중',
    color: 'green',
  },
  COMPLETED: {
    label: '완료됨',
    color: 'blue',
  },
  ERROR: {
    label: '실패',
    color: 'red',
  },
};

export type TaskStatusType = keyof typeof TASK_STATUS;

export const TASK_TYPE = {
  train: {
    label: 'Train',
    color: 'blue',
    icon: Brain,
  },
  inference: {
    label: 'Inference',
    color: 'green',
    icon: Bot,
  },
};

export type TaskType = keyof typeof TASK_TYPE;
