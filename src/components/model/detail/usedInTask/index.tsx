import { History } from 'lucide-react';
import TaskList from './TaskList';

function UsedInTask() {
  return (
    <div className="w-full bg-white rounded p-6 shadow-xs flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <History size="1.25rem" />
        <h4 className="font-semibold text-xl">사용 이력</h4>
      </div>
      <TaskList />
    </div>
  );
}

export default UsedInTask;
