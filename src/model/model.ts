import type { ModelType } from '@/constants/model';

export interface Model {
  modelId: number;
  modelName: string;
  createdAt: string;
  type: ModelType;
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
}
