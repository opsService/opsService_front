import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from '../../../ui/table';
import Tag from '@/components/common/Tag';
import { TASK_STATUS, TASK_TYPE } from '@/constants/task';
import { MODEL_DETAIL } from '@/data/model';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function TaskList() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-h-[20rem] overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {['이름', '유형', '상태', '생성일', '보기'].map((label) => (
              <TableHead key={label} className="text-sm text-gray-500">
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {MODEL_DETAIL.usedInTasks.map((task) => {
            const Icon = TASK_TYPE[task.taskType].icon;
            return (
              <TableRow key={task.taskId}>
                <TableCell className="font-semibold">{task.taskName}</TableCell>
                <TableCell>
                  <Tag size="sm" color={TASK_TYPE[task.taskType].color}>
                    <Icon size="1rem" />
                    {TASK_TYPE[task.taskType].label}
                  </Tag>
                </TableCell>
                <TableCell>
                  <Tag color={TASK_STATUS[task.taskStatus].color} size="sm">
                    {TASK_STATUS[task.taskStatus].label}
                  </Tag>
                </TableCell>
                <TableCell className="text-gray-500">
                  {dayjs(task.createdAt).format('YYYY-MM-DD HH:mm')}
                </TableCell>
                <TableCell
                  className="text-blue-500 cursor-pointer"
                  onClick={() => navigate(`/task/${task.taskId}`)}
                >
                  상세보기
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default TaskList;
