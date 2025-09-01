import Title from '@/components/common/Title';
import TaskForm from '@/components/task/form';
import { useSearchParams } from 'react-router-dom';

function TaskFormPage() {
  const [searchParams] = useSearchParams();
  const taskType = searchParams.get('taskType');
  return (
    <div className="w-full flex flex-col gap-4">
      <Title
        title="Task 생성"
        description="Train / Inference 태스크를 생성할 수 있습니다."
      />
      <TaskForm defaultTaskType={taskType} />
    </div>
  );
}

export default TaskFormPage;
