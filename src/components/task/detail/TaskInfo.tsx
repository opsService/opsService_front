import Title from '@/components/common/Title';
import type { RootState } from '@/stores/store';
import { useSelector } from 'react-redux';
import InfoBox from './InfoBox';
import Tag from '@/components/common/Tag';
import { Brain, Bot, Circle, Trash2, Ban } from 'lucide-react';
import { TASK_STATUS, TASK_TYPE } from '@/constants/task';
import dayjs from 'dayjs';
import { Button } from '@/components/ui/button';

function TaskInfo() {
  const selectedTask = useSelector(
    (state: RootState) => state.task.selectedTask,
  );

  if (!selectedTask) return;

  const Icon = TASK_TYPE[selectedTask.taskType].icon;

  return (
    <div className="rounded bg-white p-6 flex flex-col gap-4">
      <div className="flex gap-4 justify-between">
        <Title title={selectedTask.taskName} as="h3" size="medium" />
        <div className="flex gap-3 items-center">
          <Button className="cursor-pointer">
            <Ban />
            중지
          </Button>
          <Button className="cursor-pointer bg-transparent border border-red-600 text-red-600 hover:bg-red-600/10">
            <Trash2 />
            삭제
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        <InfoBox
          name="Task 유형"
          content={
            <Tag size="sm" color={TASK_TYPE[selectedTask.taskType].color}>
              <Icon size="1rem" />
              {TASK_TYPE[selectedTask.taskType].label}
            </Tag>
          }
        />
        <InfoBox
          name="현재 상태"
          content={
            <Tag size="sm" color={TASK_STATUS[selectedTask.taskStatus].color}>
              <Circle size=".5rem" fill="currentColor" />
              {TASK_STATUS[selectedTask.taskStatus].label}
            </Tag>
          }
        />
        <InfoBox name="모델" content={selectedTask.baseModel.modelName} />
        <InfoBox
          name="생성일"
          content={dayjs(selectedTask.createdAt).format('YYYY년 M월 D일 HH:mm')}
        />
      </div>
    </div>
  );
}

export default TaskInfo;
