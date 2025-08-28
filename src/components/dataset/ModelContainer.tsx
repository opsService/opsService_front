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

function ModelCotainer({ title, modelId }: { title: string; modelId: number }) {
  const datasetData = DATA_SET[modelId as 1 | 2 | 3];

  if (!datasetData) return;

  return (
    <div className="w-full rounded shadow-xs bg-white p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Title as="h3" size="medium" title={title} />
        <Button
          size="sm"
          className="cursor-pointer bg-transparent border border-sky-600 text-sky-600 hover:bg-sky-600/10"
        >
          <Upload size="1rem" />
          업로드
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {['이름', '크기 (MB)', '업로드일', '보기'].map((label) => (
              <TableHead key={label} className="text-sm text-gray-500">
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {datasetData.map((dataset) => (
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
      <span className="mt-auto text-sm text-center text-blue-500 cursor-pointer">
        전체보기
      </span>
    </div>
  );
}

export default ModelCotainer;
