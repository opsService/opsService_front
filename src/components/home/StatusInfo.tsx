function StatusInfo({
  icon,
  title,
  content,
  iconColor = 'bg-blue-300',
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  iconColor?: string;
}) {
  return (
    <div className="w-full p-4 flex items-center bg-white rounded gap-4 shadow-xs">
      <div
        className={`p-3 rounded flex items-center justify-center bg-${iconColor}-500/10`}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-between">
        <span className="text-sm text-gray-400">{title}</span>
        <span className="text-2xl text-black font-bold">{content}</span>
      </div>
    </div>
  );
}

export default StatusInfo;
