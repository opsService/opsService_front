import type { TaskStatusType, TaskType } from '@/constants/task';
import type { Model } from './model';

export interface Task {
  taskId: number;
  taskName: string;
  taskStatus: TaskStatusType;
  taskType: TaskType;
  baseModel: {
    modelId: number;
    modelName: string;
  };
  createdAt: string;
}

interface BaseTaskDetail {
  taskId: number;
  taskName: string;
  taskStatus: TaskStatusType;
  baseModel: {
    modelId: number;
    modelName: string;
  };
  createdAt: string;
}

export interface TrainTaskDetail extends BaseTaskDetail {
  taskType: 'train';
  // hyperparameters: {
  //   epoch: number;
  //   batchSize: number;
  //   learningRate: number;
  // };
  // dataset: {
  //   datasetId: number;
  //   datasetName: string;
  //   numOfTrainSample: number;
  //   numOfValidationSample: number;
  // };
  // metric: {
  //   epoch: number;
  //   trainAcc: number;
  //   valAcc: number;
  //   valF1: number;
  // }[];
}

export interface InferenceTaskDetail extends BaseTaskDetail {
  taskType: 'inference';
  endpoint: string;
  // sampleInput: {
  //   dataType: string;
  //   dataName: string;
  //   dataUrl: string;
  // };
  // sampleOutput: {
  //   dataType: string;
  //   dataName: string;
  //   dataUrl: string;
  //   prediction: {
  //     class: string;
  //     confidence: number;
  //   };
  // };
}

export type TaskDetail = TrainTaskDetail | InferenceTaskDetail;
