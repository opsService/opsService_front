import Title from '@/components/common/Title';
import FilteringBar from '@/components/model/filtering';
import ModelList from '@/components/model/ModelList';

function ModelPage() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Title
        title="모델 관리"
        description="학습된 모델들을 관리할 수 있습니다."
      />
      <FilteringBar />
      <ModelList />
    </div>
  );
}

export default ModelPage;
