import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { setFilter } from '@/stores/task';
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const taskTypeFilter = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: 'Train',
    value: 'train',
  },
  {
    label: 'Inference',
    value: 'inference',
  },
];

const statusFilter = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: '대기중',
    value: 'PENDING',
  },
  {
    label: '실행중',
    value: 'RUNNING',
  },
  {
    label: '완료됨',
    value: 'COMPLETED',
  },
  {
    label: '실패',
    value: 'ERROR',
  },
];

function FilterBox() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state: RootState) => state.task.selectedFilter,
  );

  return (
    <div className="flex gap-4 h-full">
      <div className="relative w-[8rem]">
        <label
          htmlFor="taskType"
          className="absolute -top-2 left-1 bg-white px-1 text-xs text-gray-500"
        >
          작업 유형
        </label>
        <Select
          value={selectedFilter.taskType}
          onValueChange={(value) =>
            dispatch(setFilter({ key: 'taskType', value }))
          }
        >
          <SelectTrigger
            id="taskType"
            className="w-full min-h-full rounded shadow-none border border-gray-200 focus-visible:ring-0 focus-visible:border-gray-200"
          >
            <SelectValue placeholder="유형 선택" />
          </SelectTrigger>
          <SelectContent>
            {taskTypeFilter.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="relative w-[8rem]">
        <label
          htmlFor="statusType"
          className="absolute -top-2 left-1 bg-white px-1 text-xs text-gray-500"
        >
          상태
        </label>
        <Select
          value={selectedFilter.status}
          onValueChange={(value) =>
            dispatch(setFilter({ key: 'status', value }))
          }
        >
          <SelectTrigger
            id="statusType"
            className="w-full min-h-full rounded shadow-none border border-gray-200 focus-visible:ring-0 focus-visible:border-gray-200"
          >
            <SelectValue placeholder="상태 선택" />
          </SelectTrigger>
          <SelectContent>
            {statusFilter.map((filter) => (
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
