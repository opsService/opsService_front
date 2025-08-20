import InferenceInfo from '@/components/task/detail/inference';
import TaskInfo from '@/components/task/detail/TaskInfo';
import TrainInfo from '@/components/task/detail/train';
import type { RootState } from '@/stores/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TaskDetailPage() {
  const navigate = useNavigate();
  const selectedTask = useSelector(
    (state: RootState) => state.task.selectedTask,
  );

  return (
    <div className="py-8 px-12 w-full flex flex-col gap-4">
      <span
        onClick={() => navigate('/task')}
        className="text-sky-500 font-semibold cursor-pointer"
      >
        {'<- Task 목록으로 돌아가기'}
      </span>
      <TaskInfo />
      {selectedTask.taskType === 'train' ? <TrainInfo /> : <InferenceInfo />}
    </div>
  );
}

export default TaskDetailPage;
