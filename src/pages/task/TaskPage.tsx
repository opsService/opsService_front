import Title from '@/components/common/Title';
import FilteringBar from '@/components/task/filtering';
import TaskList from '@/components/task/TaskList';

function TaskPage() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Title title="Task 목록" description="모든 Task를 관리할 수 있습니다." />
      <FilteringBar />
      <TaskList />
    </div>
  );
}

export default TaskPage;
