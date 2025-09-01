import { formatBytes } from '@/utils/size';
import { FilePlus2, FolderArchive, X } from 'lucide-react';
import { useState } from 'react';

function DataUploadForm() {
  const [file, setFile] = useState<File>();

  const onUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files || files.length === 0) return;
    setFile(() => files[0]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="width-[30rem] flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm text-gray-500" htmlFor="name">
          데이터셋 이름
        </label>
        <input
          id="name"
          type="text"
          className="p-2 w-full rounded border border-gray-200"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor="file"
          className="flex flex-col gap-1 w-full text-sm text-gray-500 cursor-pointer"
        >
          <span>
            파일 업로드{' '}
            <span className="text-red-500">(※ .zip 파일만 가능)</span>
          </span>
          <div
            className={`p-4 w-full rounded border border-gray-200 ${!file && 'hover:bg-black/10'}`}
          >
            {!file ? (
              <>
                <input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={onUploadFile}
                  value={file}
                  accept=".zip"
                />
                <div className="flex flex-col m-auto items-center gap-2">
                  <span>클릭하여 파일을 업로드해주세요</span>
                  <FilePlus2 size="2rem" className="m-auto" />
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <FolderArchive size="1rem" />
                  <span className="text-black text-base">{file.name}</span>
                  <span>{formatBytes(file.size)}</span>
                </div>
                <X
                  size="1.25rem"
                  className="cursor-pointer"
                  onMouseUp={() => setFile(undefined)}
                />
              </div>
            )}
          </div>
        </label>
      </div>
    </form>
  );
}

export default DataUploadForm;
