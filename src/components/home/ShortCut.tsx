function ShortCut({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <div
      className={`rounded px-8 flex items-center gap-4 bg-${color}-500/10 shadow-xs border-1 border-${color}-500 cursor-pointer`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <span className={`text-lg text-${color}-600 font-semibold`}>{label}</span>
    </div>
  );
}

export default ShortCut;
