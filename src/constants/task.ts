export const TASK_STATUS = {
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
