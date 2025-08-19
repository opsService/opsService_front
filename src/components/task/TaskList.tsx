import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from '../ui/table';
import Tag from '../common/Tag';
import { TASK_STATUS } from '@/constants/task';
import Pagination from '../common/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { setPage } from '@/stores/task';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TaskList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page, totalPage, taskData } = useSelector(
    (state: RootState) => state.task,
  );

  return (
    <div className="w-full rounded bg-white p-4 flex flex-col gap-4 items-center">
      <Table>
        <TableHeader>
          <TableRow>
            {['이름', '상태', '생성일', '모델', '보기', ''].map((label) => (
              <TableHead key={label} className="text-sm text-gray-500">
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {taskData.map((task) => (
            <TableRow key={task.experimentId}>
              <TableCell className="font-semibold">
                {task.experimentName}
              </TableCell>
              <TableCell>
                <Tag color={TASK_STATUS[task.experimentStatus].color} size="sm">
                  {TASK_STATUS[task.experimentStatus].label}
                </Tag>
              </TableCell>
              <TableCell className="text-gray-500">{task.createdAt}</TableCell>
              <TableCell className="text-gray-500">{task.baseModel}</TableCell>
              <TableCell
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate(`/task/${task.experimentId}`)}
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

export default TaskList;
