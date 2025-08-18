function CountBox({ label, cnt }: { label: string; cnt: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-lg font-semibold">{cnt}</span>
    </div>
  );
}

export default CountBox;
