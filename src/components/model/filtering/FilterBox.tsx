import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { setFilter } from '@/stores/model';
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { BaseModelType, ModelTaskType } from '@/model/model';

const modelTaskFilter: { label: string; value: ModelTaskType | 'all' }[] = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: 'Object Detection',
    value: 'object_detection',
  },
  {
    label: 'Image Classification',
    value: 'image_classification',
  },
  {
    label: 'Text Classification',
    value: 'text_classification',
  },
];

const baseModelFilter: { label: string; value: BaseModelType | 'all' }[] = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: 'Resnet18 Classification',
    value: 'resnet18_classification',
  },
  {
    label: 'Tabular Regression',
    value: 'tabular_regression',
  },
  {
    label: 'Text Classification',
    value: 'text_classification',
  },
];

function FilterBox() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state: RootState) => state.model.selectedFilter,
  );

  return (
    <div className="flex gap-4 h-full">
      <div className="relative w-[12rem]">
        <label
          htmlFor="modelTask"
          className="absolute -top-2 left-1 bg-white px-1 text-xs text-gray-500"
        >
          모델 작업 유형
        </label>
        <Select
          value={selectedFilter.modelTask}
          onValueChange={(value) =>
            dispatch(setFilter({ key: 'modelTask', value }))
          }
        >
          <SelectTrigger
            id="modelTask"
            className="w-full min-h-full rounded shadow-none border border-gray-200 focus-visible:ring-0 focus-visible:border-gray-200"
          >
            <SelectValue placeholder="작업 유형 선택" />
          </SelectTrigger>
          <SelectContent>
            {modelTaskFilter.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="relative w-[12rem]">
        <label
          htmlFor="baseModel"
          className="absolute -top-2 left-1 bg-white px-1 text-xs text-gray-500"
        >
          기반 모델
        </label>
        <Select
          value={selectedFilter.baseModel}
          onValueChange={(value) =>
            dispatch(setFilter({ key: 'baseModel', value }))
          }
        >
          <SelectTrigger
            id="baseModel"
            className="w-full min-h-full rounded shadow-none border border-gray-200 focus-visible:ring-0 focus-visible:border-gray-200"
          >
            <SelectValue placeholder="기반 모델 선택" />
          </SelectTrigger>
          <SelectContent>
            {baseModelFilter.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default FilterBox;
