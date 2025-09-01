import type { Model, ModelDetail } from '@/model/model';

export const BASE_MODEL = [
  {
    modelName: 'resnet18_classification',
    modelId: 1,
  },
  {
    modelName: 'tabular_regression',
    modelId: 2,
  },
  {
    modelName: 'text_classification',
    modelId: 3,
  },
];

export const MODELS: Model[] = [
  {
    modelId: 1,
    modelName: 'Object Detection v1',
    description: 'YOLOv5 기반 객체 탐지 모델',
    createdAt: '2025-08-01T14:23:00Z',
    modelTask: 'object_detection',
    baseModel: {
      modelId: 100,
      modelName: 'resnet18_classification',
    },
    version: 'v1.0.0',
    type: 'CUSTOM',
  },
  {
    modelId: 2,
    modelName: 'Image Classification ResNet18',
    description: 'ResNet18을 활용한 이미지 분류 모델',
    createdAt: '2025-08-10T09:00:00Z',
    modelTask: 'image_classification',
    baseModel: {
      modelId: 101,
      modelName: 'resnet18_classification',
    },
    version: 'v2.1.0',
    type: 'CUSTOM',
  },
  {
    modelId: 3,
    modelName: 'Text Classification BERT',
    description: 'BERT 기반 텍스트 분류 모델',
    createdAt: '2025-08-12T15:45:00Z',
    modelTask: 'text_classification',
    baseModel: {
      modelId: 102,
      modelName: 'text_classification',
    },
    version: 'v1.0.1',
    type: 'CUSTOM',
  },
  {
    modelId: 4,
    modelName: 'Tabular Regression Model',
    description: '표 데이터 예측을 위한 회귀 모델',
    createdAt: '2025-08-15T11:20:00Z',
    modelTask: 'image_classification',
    baseModel: {
      modelId: 103,
      modelName: 'tabular_regression',
    },
    version: 'v3.0.0',
    type: 'CUSTOM',
  },
  {
    modelId: 5,
    modelName: 'Object Detection v2',
    description: 'YOLOv8 기반 객체 탐지 모델',
    createdAt: '2025-08-20T10:00:00Z',
    modelTask: 'object_detection',
    baseModel: {
      modelId: 104,
      modelName: 'resnet18_classification',
    },
    version: 'v2.0.0',
    type: 'CUSTOM',
  },
  {
    modelId: 6,
    modelName: 'Efficient Image Classifier',
    description: '경량화된 이미지 분류 모델',
    createdAt: '2025-08-22T18:30:00Z',
    modelTask: 'image_classification',
    baseModel: {
      modelId: 105,
      modelName: 'resnet18_classification',
    },
    version: 'v1.2.0',
    type: 'CUSTOM',
  },
  {
    modelId: 7,
    modelName: 'Sentiment Analysis',
    description: '텍스트 감정 분석 모델',
    createdAt: '2025-08-25T09:10:00Z',
    modelTask: 'text_classification',
    baseModel: {
      modelId: 106,
      modelName: 'text_classification',
    },
    version: 'v1.0.0',
    type: 'CUSTOM',
  },
  {
    modelId: 8,
    modelName: 'Fraud Detection Model',
    description: '거래 데이터 기반 사기 탐지 모델',
    createdAt: '2025-08-26T14:40:00Z',
    modelTask: 'object_detection',
    baseModel: {
      modelId: 107,
      modelName: 'tabular_regression',
    },
    version: 'v2.0.0',
    type: 'CUSTOM',
  },
  {
    modelId: 9,
    modelName: 'Medical Image Classifier',
    description: '의료 영상 분류용 모델',
    createdAt: '2025-08-28T07:25:00Z',
    modelTask: 'image_classification',
    baseModel: {
      modelId: 108,
      modelName: 'resnet18_classification',
    },
    version: 'v3.2.1',
    type: 'CUSTOM',
  },
  {
    modelId: 10,
    modelName: 'Traffic Sign Detector',
    description: '도로 표지판 탐지 모델',
    createdAt: '2025-08-30T16:50:00Z',
    modelTask: 'object_detection',
    baseModel: {
      modelId: 109,
      modelName: 'resnet18_classification',
    },
    version: 'v1.0.3',
    type: 'CUSTOM',
  },
];

export const MODEL_DETAIL: ModelDetail = {
  modelId: 1,
  modelName: 'Object Detection v1',
  description: 'YOLOv5 기반 객체 탐지 모델. 도로 교통 데이터셋으로 학습됨.',
  createdAt: '2025-08-01T14:23:00Z',
  type: 'CUSTOM',
  modelTask: 'object_detection',
  version: 'v1.0.0',
  metrics: {
    accuracy: 0.92,
    f1_score: 0.89,
    precision: 0.91,
    recall: 0.88,
  },
  hyperparameters: {
    epoch: 50,
    batchSize: 32,
    learningRate: 0.001,
  },
  modelPath: '/storage/models/object_detection/v1/model.pt',
  usedInTasks: [
    {
      taskId: 101,
      taskName: 'Traffic Dataset Training',
      taskStatus: 'COMPLETED',
      taskType: 'train',
      baseModel: {
        modelId: 1,
        modelName: 'resnet18_classification',
      },
      createdAt: '2025-07-20T12:00:00Z',
    },
    {
      taskId: 102,
      taskName: 'Real-time Camera Inference',
      taskStatus: 'RUNNING',
      taskType: 'inference',
      baseModel: {
        modelId: 1,
        modelName: 'resnet18_classification',
      },
      createdAt: '2025-08-05T08:30:00Z',
    },
  ],
};
