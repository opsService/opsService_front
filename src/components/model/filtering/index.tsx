import { Search } from 'lucide-react';
import FilterBox from './FilterBox';
import SortingSelect from './SortingSelect';

function FilteringBar() {
  return (
    <div className="w-full p-4 flex items-center h-[5rem] bg-white rounded gap-4 shadow-xs">
      <div className="h-full flex-1 min-w-0 border border-gray-200 rounded px-4 py-2 flex items-center gap-3">
        <Search size="1rem" className="text-gray-300" />
        <input
          className="text-sm outline-none"
          type="text"
          placeholder="모델 이름 검색"
        />
      </div>
      <FilterBox />
      <SortingSelect />
    </div>
  );
}

export default FilteringBar;
