import Title from '@/components/common/Title';
import LossGraph from './LossGraph';
import MetricGraph from './MetricGraph';

function MetricInfoTab() {
  return (
    <div className="w-full grid grid-cols-2 gap-8 mt-2">
      <div className="flex flex-col gap-3 w-full">
        <Title as="h3" size="small" title="Loss 그래프" />
        <LossGraph />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <Title as="h3" size="small" title="Accuracy/F1 그래프" />
        <MetricGraph />
      </div>
    </div>
  );
}

export default MetricInfoTab;
