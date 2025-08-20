import clsx from 'clsx';

function Tag({
  color = 'gray',
  size = 'base',
  children,
}: {
  color?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg';
  children: React.ReactNode;
}) {
  const tagClass = clsx(
    'py-1 px-2 rounded-full w-fit font-semibold flex items-center gap-1',
    `bg-${color}-100 text-${color}-600 text-${size}`,
  );

  return <div className={tagClass}>{children}</div>;
}

export default Tag;
