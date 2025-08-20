import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InferenceTab from './InferenceTab';
import LogTab from '../LogTab';

function InferenceInfo() {
  return (
    <div className="w-full bg-white rounded p-6">
      <Tabs defaultValue="inference">
        <TabsList>
          <TabsTrigger
            className="font-semibold cursor-pointer"
            value="inference"
          >
            추론 실행
          </TabsTrigger>
          <TabsTrigger className="font-semibold cursor-pointer" value="log">
            로그
          </TabsTrigger>
        </TabsList>
        <TabsContent value="inference">
          <InferenceTab />
        </TabsContent>
        <TabsContent value="log">
          <LogTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default InferenceInfo;
