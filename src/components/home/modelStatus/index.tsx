import Title from '../../common/Title';
import type { Model } from '@/model/model';
import CountBox from './CountBox';
import ModelItem from './ModelItem';

const modelData = [
  {
    modelId: 1,
    modelName: '이미지 분류',
    createdAt: '2025-08-18',
    type: 'CUSTOM',
  },
  {
    modelId: 2,
    modelName: '선형 회귀',
    createdAt: '2025-08-17',
    type: 'BASE',
  },
  {
    modelId: 3,
    modelName: '객체 탐지',
    createdAt: '2025-08-15',
    type: 'BASE',
  },
] as Model[];

function ModelStatus() {
  return (
    <div className="col-span-1 bg-white rounded flex flex-col p-4 gap-4 shadow-xs">
      <Title title="모델 현황" size="small" as="h2" />
      <div className="flex flex-col w-full gap-2">
        <CountBox label="전체 모델" cnt={42} />
        <CountBox label="학습 완료" cnt={36} />
        <CountBox label="학습 중" cnt={6} />
      </div>
      <h3 className="text-sm font-semibold">최근 생성된 모델</h3>
      {modelData.map((model) => (
        <ModelItem key={model.modelId} data={model} />
      ))}
    </div>
  );
}

export default ModelStatus;
