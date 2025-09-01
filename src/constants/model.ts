export const MODEL_TYPE = {
  CUSTOM: {
    label: '커스텀',
    color: 'green',
  },
  BASE: {
    label: '기본',
    color: 'blue',
  },
};

export type ModelType = keyof typeof MODEL_TYPE;

export const MODEL_TASK_TYPE = {
  object_detection: {
    label: 'Object Detection',
    color: 'blue',
  },
  image_classification: {
    label: 'Image Classification',
    color: 'green',
  },
  text_classification: {
    label: 'Text Classification',
    color: 'yellow',
  },
};
