import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import FormItem from './FormItem';
import { useState } from 'react';
import { DATA_SET } from '@/data/dataset';

function TrainForm({ modelId }: { modelId: string }) {
  const [datasetId, setDatasetId] = useState<string>('');

  return (
    <>
      <FormItem
        id="dataset"
        name="사용할 데이터셋"
        content={
          <Select
            disabled={!modelId}
            value={datasetId}
            onValueChange={(value) => setDatasetId(value)}
          >
            <SelectTrigger
              style={{ height: 'fit-content', padding: '8px' }}
              className="w-full text-base rounded"
            >
              <SelectValue placeholder="데이터셋을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {modelId &&
                DATA_SET[modelId as '1' | '2' | '3'].map((dataset) => (
                  <SelectItem
                    key={dataset.datasetId}
                    className="text-base"
                    value={dataset.datasetId.toString()}
                  >
                    {dataset.datasetName}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        }
        className="w-1/2 max-w-[25rem]"
      />
      <FormItem
        id="epoch"
        name="Epoch 수"
        content={
          <input type="number" className="p-2 border border-gray-200 rounded" />
        }
        className="w-1/2 max-w-[25rem]"
      />
      <FormItem
        id="batchSize"
        name="Batch 사이즈"
        content={
          <input type="number" className="p-2 border border-gray-200 rounded" />
        }
        className="w-1/2 max-w-[25rem]"
      />
      <FormItem
        id="learningRate"
        name="학습률"
        content={
          <input
            type="number"
            step="0.01"
            className="p-2 border border-gray-200 rounded"
          />
        }
        className="w-1/2 max-w-[25rem]"
      />
    </>
  );
}

export default TrainForm;
