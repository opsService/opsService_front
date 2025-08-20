function ModelInfoBox({ name, content }: { name: string; content: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-500">{name}</span>
      <span className="font-semibold">{content}</span>
    </div>
  );
}

export default ModelInfoBox;
