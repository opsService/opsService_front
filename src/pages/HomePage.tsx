import TaskList from '@/components/home/TaskList';
import StatusInfo from '../components/home/StatusInfo';
import Title from '../components/common/Title';
import {
  CirclePlay,
  ListChecks,
  CircleX,
  Brain,
  Bot,
  Database,
} from 'lucide-react';
import ModelStatus from '@/components/home/modelStatus';
import ShortCut from '@/components/home/ShortCut';

function HomePage() {
  return (
    <div className="py-8 px-12 w-full flex flex-col gap-4">
      <Title
        title="대시보드"
        description="작업 현황 및 통계를 확인할 수 있습니다."
      />
      <div className="w-full grid grid-cols-3 gap-4">
        <StatusInfo
          icon={<ListChecks size="1.752rem" className="text-blue-600" />}
          title="생성된 Task 수"
          content="10"
          iconColor="blue"
        />
        <StatusInfo
          icon={<CirclePlay size="1.752rem" className="text-green-600" />}
          title="실행 중인 Task 수"
          content="4"
          iconColor="green"
        />
        <StatusInfo
          icon={<CircleX size="1.752rem" className="text-red-600" />}
          title="에러 발생 Task 수"
          content="2"
          iconColor="red"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <TaskList />
        <ModelStatus />
      </div>
      <div className="grid grid-cols-3 gap-4 h-[5rem]">
        <ShortCut
          icon={<Brain size="2rem" className="text-blue-600" />}
          label="Train 생성"
          color="blue"
        />
        <ShortCut
          icon={<Bot size="2rem" className="text-green-600" />}
          label="Inference 생성"
          color="green"
        />
        <ShortCut
          icon={<Database size="2rem" className="text-yellow-600" />}
          label="데이터셋 보기"
          color="yellow"
        />
      </div>
    </div>
  );
}

export default HomePage;
