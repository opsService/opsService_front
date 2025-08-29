import Title from '../common/Title';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table';
import dayjs from 'dayjs';
import { DATA_SET } from '@/data/dataset';
import { Button } from '../ui/button';
import { Upload } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import SearchBar from './SearchBar';

function DatasetList() {
  const { selectedModel, selectedDataset } = useSelector(
    (state: RootState) => state.dataset,
  );

  if (!selectedModel || !selectedDataset) return;

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="px-4 py-3 font-semibold border-b border-gray-200 flex items-center gap-2">
        {selectedModel.modelName}
      </div>
      <div className="flex-1 min-h-0 p-4 w-full flex flex-col gap-2">
        <SearchBar />
        <Table className="flex-1 min-h-0 w-full overflow-y-auto">
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              {['이름', '크기 (MB)', '업로드일', '보기'].map((label) => (
                <TableHead key={label} className="text-sm text-gray-500">
                  {label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedDataset.map((dataset) => (
              <TableRow key={dataset.datasetId}>
                <TableCell className="font-semibold">
                  {dataset.datasetName}
                </TableCell>
                <TableCell className="text-gray-500">{dataset.size}</TableCell>
                <TableCell className="text-gray-500">
                  {dayjs(dataset.uploadedAt).format('YYYY-MM-DD HH:mm')}
                </TableCell>
                <TableCell className="text-blue-500 cursor-pointer">
                  상세보기
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DatasetList;
