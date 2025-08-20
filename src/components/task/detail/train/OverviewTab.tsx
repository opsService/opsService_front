import Title from '@/components/common/Title';
import StatusBox from './StatusBox';
import { Clock3, Database, Loader } from 'lucide-react';
import ModelInfoBox from './ModelInfoBox';

function OverviewTab() {
  return (
    <div className="w-full grid grid-cols-2 gap-8 mt-2">
      <div className="flex flex-col w-full gap-3">
        <Title as="h3" size="small" title="학습 진행 상황" />
        <StatusBox
          name="현재 진행률"
          content="65%"
          color="blue"
          icon={<Loader size="1.5rem" className="text-blue-500" />}
        />
        <StatusBox
          name="현재 Epoch"
          content="13 / 20"
          color="green"
          icon={<Clock3 size="1.5rem" className="text-green-500" />}
        />
        <StatusBox
          name="현재 Batch"
          content="2847 / 4392"
          color="yellow"
          icon={<Database size="1.5rem" className="text-yellow-500" />}
        />
      </div>
      <div className="flex flex-col w-full gap-3">
        <Title as="h3" size="small" title="모델 정보" />
        <ModelInfoBox name="모델 아키텍처" content="BERT-base-uncased" />
        <ModelInfoBox name="데이터셋" content="Korean Sentiment Dataset" />
        <ModelInfoBox name="학습 샘플 수" content="87542 개" />
        <ModelInfoBox name="검증 샘플 수" content="21886 개" />
        <ModelInfoBox name="Epoch 수" content="20" />
        <ModelInfoBox name="배치 크기" content="32" />
        <ModelInfoBox name="학습률" content="2e-5" />
      </div>
    </div>
  );
}

export default OverviewTab;
