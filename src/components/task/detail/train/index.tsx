import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LogTab from '../LogTab';
import OverviewTab from './OverviewTab';
import MetricInfoTab from './metric/MetricInfoTab';

function TrainInfo() {
  return (
    <div className="w-full bg-white rounded p-6">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger
            className="font-semibold cursor-pointer"
            value="overview"
          >
            개요
          </TabsTrigger>
          <TabsTrigger className="font-semibold cursor-pointer" value="metric">
            메트릭 정보
          </TabsTrigger>
          <TabsTrigger className="font-semibold cursor-pointer" value="log">
            로그
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="metric">
          <MetricInfoTab />
        </TabsContent>
        <TabsContent value="log">
          <LogTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TrainInfo;
