import { Button } from '@/components/ui/button';

function InferenceTab() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col w-full gap-2">
        <span className="text-sm text-gray-500">입력 예시</span>
        <div className="rounded border border-gray-200 p-4">입력 예시</div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <span className="text-sm text-gray-500">입력</span>
        <div className="rounded border border-gray-200 p-4">
          <textarea className="outline-none w-full" />
        </div>
      </div>
      <Button className="cursor-pointer bg-sky-500 hover:bg-sky-500/70">
        실행
      </Button>
    </div>
  );
}

export default InferenceTab;
