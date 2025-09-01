import type { MODEL_TASK_TYPE, ModelType } from '@/constants/model';
import type { Task } from './task';

export interface Model {
  modelId: number;
  modelName: string;
  description?: string;
  createdAt: string;
  type: ModelType;
  modelTask: ModelTaskType;
  baseModel?: {
    modelId: number;
    modelName: string;
  };
  version: string;
}

export interface ModelDetail extends Model {
  metrics?: {
    accuracy: number;
    f1_score: number;
    precision: number;
    recall: number;
  };
  hyperparameters?: {
    epoch: number;
    batchSize: number;
    learningRate: number;
  };
  modelPath: string;
  usedInTasks: Task[];
}

export type ModelTaskType = keyof typeof MODEL_TASK_TYPE;

export type BaseModelType =
  | 'resnet18_classification'
  | 'tabular_regression'
  | 'text_classification';
