import type { ModelType } from '@/constants/model';

export interface Model {
  modelId: number;
  modelName: string;
  createdAt: string;
  type: ModelType;
}

export interface ModelDetail extends Model {
  hyperparameters?: {
    epoch: number;
    batchSize: number;
    learningRate: number;
  };
}
