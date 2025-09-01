import Sidebar from '@/components/common/SideBar';
import Title from '@/components/common/Title';
import DatasetList from '@/components/dataset/DatasetList';
import { selectModel } from '@/stores/dataset';
import type { RootState } from '@/stores/store';
import { Package } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_MODEL } from '@/data/model';

function DatasetPage() {
  const dispatch = useDispatch();
  const selectedModel = useSelector(
    (state: RootState) => state.dataset.selectedModel,
  );

  useEffect(() => {
    dispatch(selectModel(BASE_MODEL[0]));
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 h-full">
      <Title
        title="데이터셋 목록"
        description="업로드한 Dataset을 관리할 수 있습니다."
      />
      <div className="w-full rounded shadow-xs bg-white flex-grow flex min-h-0 overflow-hidden">
        <Sidebar className="w-[14rem]">
          <Sidebar.Header>
            <Package size="1rem" />
            <span className="font-semibold text-lg">모델 목록</span>
          </Sidebar.Header>
          <Sidebar.Content>
            {BASE_MODEL.map((model) => (
              <Sidebar.Menu
                key={model.modelId}
                isSelected={selectedModel?.modelId === model.modelId}
                onClick={() => dispatch(selectModel(model))}
              >
                {model.modelName}
              </Sidebar.Menu>
            ))}
          </Sidebar.Content>
        </Sidebar>
        <DatasetList />
      </div>
    </div>
  );
}

export default DatasetPage;
