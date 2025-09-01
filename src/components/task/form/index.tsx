import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import FormItem from './FormItem';
import { useEffect, useState } from 'react';
import TrainForm from './TrainForm';
import { MODEL_TASK_TYPE } from '@/constants/model';
import { Button } from '@/components/ui/button';
import { BASE_MODEL, MODELS } from '@/data/model';
import type { Model } from '@/model/model';

const CUSTOM_MODELS = MODELS.map((model) => ({
  modelId: model.modelId,
  modelName: model.modelName,
}));

function TaskForm({ defaultTaskType }: { defaultTaskType: string | null }) {
  const [taskType, setTaskType] = useState(defaultTaskType || 'train');
  const [modelTask, setModelTask] = useState('object_detection');
  const [modelId, setModelId] = useState<string>('');
  const [modelList, setModelList] =
    useState<Pick<Model, 'modelId' | 'modelName'>[]>(BASE_MODEL);

  useEffect(() => {
    if (taskType === 'train') {
      setModelList(BASE_MODEL);
    } else if (taskType === 'inference') {
      setModelList([...BASE_MODEL, ...CUSTOM_MODELS]);
    }
  }, [taskType]);

  return (
    <form
      className="bg-white rounded shadow-xs p-6 flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormItem
        id="taskName"
        name="작업 이름"
        content={
          <input
            id="taskName"
            type="text"
            className="p-2 border border-gray-200 rounded"
          />
        }
        className="w-1/2 max-w-[25rem]"
      />
      <FormItem
        id="taskType"
        name="작업 유형 선택"
        content={
          <RadioGroup
            value={taskType}
            className="flex gap-4"
            onValueChange={(value) => setTaskType(value)}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                className="border-gray-400"
                value="train"
                id="train"
              />
              <label htmlFor="train">학습</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem
                className="border-gray-400"
                value="inference"
                id="inference"
              />
              <label htmlFor="inference">추론</label>
            </div>
          </RadioGroup>
        }
      />
      <FormItem
        id="modelTask"
        name="모델 태스크"
        content={
          <RadioGroup
            value={modelTask}
            className="flex gap-4"
            onValueChange={(value) => setModelTask(value)}
          >
            {Object.entries(MODEL_TASK_TYPE).map(([key, val]) => (
              <div key={key} className="flex items-center gap-2">
                <RadioGroupItem
                  className="border-gray-400"
                  value={key}
                  id={key}
                />
                <label htmlFor={key}>{val.label}</label>
              </div>
            ))}
          </RadioGroup>
        }
      />
      <FormItem
        id="model"
        name="사용할 모델"
        content={
          <Select value={modelId} onValueChange={(value) => setModelId(value)}>
            <SelectTrigger
              style={{ height: 'fit-content', padding: '8px' }}
              className="w-full text-base rounded"
            >
              <SelectValue placeholder="모델을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {modelList.map((model) => (
                <SelectItem
                  className="text-base"
                  key={model.modelId}
                  value={model.modelId.toString()}
                >
                  {model.modelName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
        className="w-1/2 max-w-[25rem]"
      />
      {taskType === 'train' ? <TrainForm modelId={modelId} /> : <></>}
      <Button className="bg-sky-500 hover:bg-sky-500/80">생성</Button>
    </form>
  );
}

export default TaskForm;
