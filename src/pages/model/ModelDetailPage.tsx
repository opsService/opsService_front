import ModelInfo from '@/components/model/detail/ModelInfo';
import TrainingInfo from '@/components/model/detail/TrainingInfo';
import UsedInTask from '@/components/model/detail/usedInTask';
import { useNavigate } from 'react-router-dom';

function ModelDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4">
      <span
        onClick={() => navigate('/model')}
        className="text-sky-500 font-semibold cursor-pointer"
      >
        {'<- 모델 관리로 돌아가기'}
      </span>
      <ModelInfo />
      <div className="w-full grid grid-cols-2 gap-4">
        <TrainingInfo />
        <UsedInTask />
      </div>
    </div>
  );
}

export default ModelDetailPage;
