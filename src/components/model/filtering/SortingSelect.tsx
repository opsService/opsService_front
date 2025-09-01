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
    <div className="relative w-[8rem] h-full">
      <label
        htmlFor="sort"
        className="absolute -top-2 left-1 bg-white px-1 text-xs text-gray-500"
      >
        정렬
      </label>
      <Select
        value={isSortedLatest}
        onValueChange={(value) => dispatch(setSort(value))}
      >
        <SelectTrigger
          id="sort"
          className="w-full min-h-full rounded shadow-none border border-gray-200 focus-visible:ring-0 focus-visible:border-gray-200"
        >
          <SelectValue placeholder="정렬 기준" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="true">최신순</SelectItem>
          <SelectItem value="false">오래된순</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortingSelect;
