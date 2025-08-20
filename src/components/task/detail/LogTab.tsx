const logData = [
  '[2025-08-10 08:21:00] Epoch 1/20 - loss: 1.2 acc: 0.62',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
  '[2025-08-10 08:22:00] Epoch 2/20 - loss: 0.8 acc: 0.75',
];

function LogTab() {
  return (
    <div className="w-full rounded bg-black text-white flex flex-col gap-2 p-4 text-sm">
      {logData.map((log, idx) => (
        <p key={idx}>{log}</p>
      ))}
    </div>
  );
}

export default LogTab;
