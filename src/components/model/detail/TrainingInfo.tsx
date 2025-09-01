import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MODEL_DETAIL } from '@/data/model';

function TrainingInfo() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded p-6 shadow-xs flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <Brain size="1.25rem" />
        <h4 className="font-semibold text-xl">학습 정보</h4>
      </div>
      <div className="flex flex-col gap-2">
        <span
          onClick={() => navigate('/task')}
          className="text-sky-500 font-semibold cursor-pointer"
        >
          {'학습 Task 상세정보 보기 ->'}
        </span>
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Epoch 수</span>
            <span className="font-semibold">
              {MODEL_DETAIL.hyperparameters?.epoch}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Batch 사이즈</span>
            <span className="font-semibold">
              {MODEL_DETAIL.hyperparameters?.batchSize}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">학습률</span>
            <span className="font-semibold">
              {MODEL_DETAIL.hyperparameters?.learningRate}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">사용한 데이터셋</span>
            <span className="font-semibold">도로 교통 데이터셋</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingInfo;
