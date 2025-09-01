import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table';
import dayjs from 'dayjs';
import { Button } from '../ui/button';
import { Download, Trash2, Upload } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import SearchBar from './SearchBar';
import { useModalContext } from '@/contexts/ModalContext';
import DataUploadForm from './DataUploadForm';

function DatasetList() {
  const { selectedModel, selectedDataset } = useSelector(
    (state: RootState) => state.dataset,
  );
  const { open, close } = useModalContext();

  if (!selectedModel || !selectedDataset) return;

  const onOpenUploadModal = () => {
    open({
      title: '데이터셋 업로드',
      content: <DataUploadForm />,
      rightBtnLabel: '업로드',
      onRightBtnClick: () => close(),
      leftBtnLabel: '취소',
      onLeftBtnClick: () => close(),
    });
  };

  const onDeleteDataset = (id: number, name: string) => {
    open({
      title: '데이터셋 삭제',
      content: (
        <div className="w-[30rem]">
          <span>"{name}"을(를) 정말로 삭제하시겠습니까?</span>
        </div>
      ),
      rightBtnLabel: '삭제',
      onRightBtnClick: () => close(),
      leftBtnLabel: '취소',
      onLeftBtnClick: () => close(),
    });
  };

  return (
    <div className="flex-1 flex flex-col h-full p-4 gap-4">
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-xl">{selectedModel.modelName}</span>
        <Button
          className="cursor-pointer bg-transparent border border-sky-600 text-sky-600 hover:bg-sky-600/10"
          onClick={onOpenUploadModal}
        >
          <Upload size="1rem" />
          업로드
        </Button>
      </div>
      <div className="flex-1 min-h-0 w-full flex flex-col gap-2">
        <SearchBar />
        <Table className="flex-1 min-h-0 w-full overflow-y-auto">
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              {['이름', '크기 (MB)', '업로드일', ''].map((label) => (
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
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Download
                      size="1rem"
                      className="text-gray-500 cursor-pointer"
                    />
                    <Trash2
                      onClick={() =>
                        onDeleteDataset(dataset.datasetId, dataset.datasetName)
                      }
                      size="1rem"
                      className="text-red-500 cursor-pointer"
                    />
                  </div>
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
