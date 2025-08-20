import type { Task } from '@/model/task';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table';
import Title from '../common/Title';
import { TASK_STATUS } from '@/constants/task';
import Tag from '../common/Tag';
import { useNavigate } from 'react-router-dom';

const taskData = [
  {
    taskId: 1,
    taskName: '이미지 분류',
    taskStatus: 'RUNNING',
    taskType: 'train',
    baseModel: 'ResNet-50',
    createdAt: '2025-08-18',
  },
  {
    taskId: 2,
    taskName: '텍스트 요약',
    taskStatus: 'COMPLETED',
    taskType: 'inference',
    baseModel: 'BART-large',
    createdAt: '2025-08-17',
  },
  {
    taskId: 3,
    taskName: '객체 감지',
    taskStatus: 'ERROR',
    taskType: 'inference',
    baseModel: 'YOLO v5',
    createdAt: '2025-08-16',
  },
  {
    taskId: 4,
    taskName: '음성 인식',
    taskStatus: 'COMPLETED',
    taskType: 'train',
    baseModel: 'Whisper',
    createdAt: '2025-08-16',
  },
  {
    taskId: 5,
    taskName: '감정 분석',
    taskStatus: 'RUNNING',
    taskType: 'inference',
    baseModel: 'BERT-base',
    createdAt: '2025-08-15',
  },
  {
    taskId: 6,
    taskName: '감정 분석',
    taskStatus: 'RUNNING',
    taskType: 'inference',
    baseModel: 'BERT-base',
    createdAt: '2025-08-15',
  },
  {
    taskId: 7,
    taskName: '감정 분석',
    taskStatus: 'RUNNING',
    taskType: 'inference',
    baseModel: 'BERT-base',
    createdAt: '2025-08-15',
  },
] as Task[];

function TaskList() {
  const navigate = useNavigate();

  return (
    <div className="col-span-2 bg-white rounded flex flex-col p-4 gap-4 shadow-xs">
      <Title
        title="최근 Task 목록"
        description="최근 생성된 5개의 Task"
        size="small"
        as="h2"
      />
      <Table>
        <TableHeader>
          <TableRow>
            {['이름', '상태', '생성일', '모델', '보기'].map((label) => (
              <TableHead key={label} className="text-sm text-gray-500">
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {taskData.map((task) => (
            <TableRow key={task.taskId}>
              <TableCell className="font-semibold">{task.taskName}</TableCell>
              <TableCell>
                <Tag color={TASK_STATUS[task.taskStatus].color} size="sm">
                  {TASK_STATUS[task.taskStatus].label}
                </Tag>
              </TableCell>
              <TableCell className="text-gray-500">{task.createdAt}</TableCell>
              <TableCell className="text-gray-500">{task.baseModel}</TableCell>
              <TableCell
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate(`/task/${task.taskId}`)}
              >
                상세보기
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <span className="mt-auto text-sm text-center text-blue-500 cursor-pointer">
        더보기
      </span>
    </div>
  );
}

export default TaskList;
