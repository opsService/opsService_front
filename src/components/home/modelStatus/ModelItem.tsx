import { MODEL_TYPE } from '@/constants/model';
import type { Model } from '@/model/model';
import dayjs from 'dayjs';

function ModelItem({ data }: { data: Model }) {
  return (
    <li className="rounded bg-gray-100 p-4 flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-base font-semibold">{data.modelName}</span>
        <span className="text-sm text-gray-500">
          {MODEL_TYPE[data.type].label}
        </span>
      </div>
      <span className="text-sm">{dayjs(data.createdAt).fromNow()}</span>
    </li>
  );
}

export default ModelItem;
