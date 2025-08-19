import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { setFilter } from '@/stores/task';

const filters = [
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

function FilterBox() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state: RootState) => state.task.selectedFilter,
  );

  return (
    <ul className="h-full rounded border border-gray-200 flex items-center">
      {filters.map((filter, idx) => (
        <Fragment key={idx}>
          <li
            className={`h-full flex items-center justify-center px-4 text-sm cursor-pointer ${selectedFilter === filter.value ? 'bg-blue-400/10 font-semibold' : 'hover:bg-gray-400/10'}`}
            onClick={() => dispatch(setFilter(filter.value))}
          >
            {filter.label}
          </li>
          {idx !== filters.length - 1 && <Separator orientation="vertical" />}
        </Fragment>
      ))}
    </ul>
  );
}

export default FilterBox;
