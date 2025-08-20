function InfoBox({
  name,
  content,
}: {
  name: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-500 text-sm">{name}</span>
      {content}
    </div>
  );
}

export default InfoBox;
