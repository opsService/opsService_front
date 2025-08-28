import Title from '@/components/common/Title';
import ModelCotainer from '@/components/dataset/ModelContainer';

const models = [
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

function DatasetPage() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Title
        title="데이터셋 목록"
        description="업로드한 Dataset을 관리할 수 있습니다."
      />
      {models.map((model) => (
        <ModelCotainer
          key={model.modelId}
          title={model.modelName}
          modelId={model.modelId}
        />
      ))}
    </div>
  );
}

export default DatasetPage;
