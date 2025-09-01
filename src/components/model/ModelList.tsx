import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from '../ui/table';
import Tag from '../common/Tag';
import Pagination from '../common/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { setPage } from '@/stores/model';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MODELS } from '@/data/model';
import dayjs from 'dayjs';
import { MODEL_TASK_TYPE } from '@/constants/model';

function ModelList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page, totalPage } = useSelector((state: RootState) => state.model);

  return (
    <div className="w-full rounded bg-white p-4 flex flex-col gap-4 items-center shadow-xs">
      <Table>
        <TableHeader>
          <TableRow>
            {[
              '이름',
              '버전',
              '모델 작업 유형',
              '기반 모델',
              '생성일',
              '보기',
              '',
            ].map((label) => (
              <TableHead key={label} className="text-sm text-gray-500">
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {MODELS.map((model) => (
            <TableRow key={model.modelId}>
              <TableCell className="font-semibold">{model.modelName}</TableCell>
              <TableCell>
                <Tag size="sm">{model.version}</Tag>
              </TableCell>
              <TableCell className="text-gray-500">
                <Tag size="sm" color={MODEL_TASK_TYPE[model.modelTask].color}>
                  {MODEL_TASK_TYPE[model.modelTask].label}
                </Tag>
              </TableCell>
              <TableCell className="text-gray-500">
                {model.baseModel?.modelName}
              </TableCell>
              <TableCell className="text-gra-500">
                {dayjs(model.createdAt).format('YYYY-MM-DD HH:mm')}
              </TableCell>
              <TableCell
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate(`/model/${model.modelId}`)}
              >
                상세보기
              </TableCell>
              <TableCell>
                <Trash2 size="1rem" className="text-red-600 cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        size="1.5rem"
        page={page}
        totalPage={totalPage}
        handleChangePage={(newPage) => dispatch(setPage(newPage))}
      />
    </div>
  );
}

export default ModelList;
