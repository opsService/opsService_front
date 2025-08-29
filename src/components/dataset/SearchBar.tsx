import { Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className="w-full border border-gray-200 rounded px-3 py-2 flex items-center gap-3">
      <Search size="1rem" className="text-gray-300" />
      <input
        className="text-sm outline-none"
        type="text"
        placeholder="데이터셋 이름 검색"
      />
    </div>
  );
}

export default SearchBar;
