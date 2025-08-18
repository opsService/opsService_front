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
