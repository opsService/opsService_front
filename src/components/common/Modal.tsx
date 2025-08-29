import Dimmed from './Dimmed';
import { Button } from '../ui/button';

interface ModalProps {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  rightBtnLabel?: string;
  onRightBtnClick?: () => void;
  leftBtnLabel?: string;
  onLeftBtnClick?: () => void;
}

function Modal({
  open,
  title,
  content,
  rightBtnLabel,
  leftBtnLabel,
  onRightBtnClick,
  onLeftBtnClick,
}: ModalProps) {
  if (open === false) return null;

  return (
    <Dimmed>
      <div
        className="absolute top-1/2 left-1/2 -translate-1/2 bg-white rounded overflow-hidden z-[1001] min-w-[30rem] p-8 flex flex-col justify-center gap-8 border boder-gray-200 min-h-[12rem]"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <span className="text-xl font-semibold">{title}</span>}
        {content}
        {(leftBtnLabel || rightBtnLabel) && (
          <div className="w-full flex items-center gap-2 justify-end">
            {leftBtnLabel && (
              <Button
                size="sm"
                className="bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500/10 "
                onClick={onLeftBtnClick}
              >
                {leftBtnLabel}
              </Button>
            )}
            {rightBtnLabel && (
              <Button
                size="sm"
                className="bg-sky-500 hover:bg-sky-500/50"
                onClick={onRightBtnClick}
              >
                {rightBtnLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </Dimmed>
  );
}

export default Modal;
