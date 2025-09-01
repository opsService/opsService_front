import Title from '@/components/common/Title';
import FilteringBar from '@/components/task/filtering';
import TaskList from '@/components/task/TaskList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TaskPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Title
          title="Task 목록"
          description="모든 Task를 관리할 수 있습니다."
        />
        <div className="flex items-center gap-2">
          <Button
            className="cursor-pointer bg-sky-500 hover:bg-sky-500/80"
            onClick={() => navigate('/task/create')}
          >
            <Plus /> Task 생성
          </Button>
        </div>
      </div>
      <FilteringBar />
      <TaskList />
    </div>
  );
}

export default TaskPage;
