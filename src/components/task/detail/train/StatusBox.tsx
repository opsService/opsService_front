function StatusBox({
  name,
  content,
  icon,
  color,
}: {
  name: string;
  content: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div
      className={`w-full rounded p-4 bg-${color}-500/10 flex gap-4 items-center justify-between`}
    >
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">{name}</span>
        <span className={`text-2xl font-bold text-${color}-500`}>
          {content}
        </span>
      </div>
      {icon}
    </div>
  );
}

export default StatusBox;
