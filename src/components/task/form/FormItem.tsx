import clsx from 'clsx';

function FormItem({
  id,
  name,
  content,
  className,
}: {
  id: string;
  name: string;
  content: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      <label className="text-gray-500" htmlFor={id}>
        {name}
      </label>
      {content}
    </div>
  );
}

export default FormItem;
