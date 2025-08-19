import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { RootState } from '@/stores/store';
import { setSort } from '@/stores/task';
import { useDispatch, useSelector } from 'react-redux';

function SortingSelect() {
  const dispatch = useDispatch();
  const isSortedLatest = useSelector(
    (state: RootState) => state.task.isSortedLatest,
  );

  return (
    <Select
      value={isSortedLatest}
      onValueChange={(value) => dispatch(setSort(value))}
    >
      <SelectTrigger className="w-[8rem] min-h-full rounded shadow-none border border-gray-200 focus-visible:ring-0 focus-visible:border-gray-200">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="true">최신순</SelectItem>
        <SelectItem value="false">오래된순</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SortingSelect;
