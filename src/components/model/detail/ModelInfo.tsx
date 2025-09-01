import Title from '@/components/common/Title';
import InfoBox from '@/components/common/InfoBox';
import Tag from '@/components/common/Tag';
import { Trash2, Download } from 'lucide-react';
import dayjs from 'dayjs';
import { Button } from '@/components/ui/button';
import { MODEL_DETAIL } from '@/data/model';
import { MODEL_TASK_TYPE } from '@/constants/model';

function ModelInfo() {
  return (
    <div className="rounded bg-white p-6 flex flex-col gap-4 shadow-xs">
      <div className="flex gap-4 justify-between">
        <Title
          title={MODEL_DETAIL.modelName}
          as="h2"
          size="medium"
          description={MODEL_DETAIL.description}
        />
        <div className="flex gap-3 items-center">
          <Button className="cursor-pointer">
            <Download />
            다운로드
          </Button>
          <Button className="cursor-pointer bg-transparent border border-red-600 text-red-600 hover:bg-red-600/10">
            <Trash2 />
            삭제
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        <InfoBox
          name="버전 정보"
          content={<Tag size="sm">{MODEL_DETAIL.version}</Tag>}
        />
        <InfoBox
          name="모델 작업 유형"
          content={
            <Tag
              size="sm"
              color={MODEL_TASK_TYPE[MODEL_DETAIL.modelTask].color}
            >
              {MODEL_TASK_TYPE[MODEL_DETAIL.modelTask].label}
            </Tag>
          }
        />
        <InfoBox name="기반 모델" content={MODEL_DETAIL.baseModel?.modelName} />
        <InfoBox
          name="생성일"
          content={dayjs(MODEL_DETAIL.createdAt).format('YYYY년 M월 D일 HH:mm')}
        />
      </div>
    </div>
  );
}

export default ModelInfo;
