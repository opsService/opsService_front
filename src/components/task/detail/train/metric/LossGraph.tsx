import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

const lossData = [
  { epoch: 1, trainLoss: 0.68, valLoss: 0.66 },
  { epoch: 2, trainLoss: 0.55, valLoss: 0.58 },
  { epoch: 3, trainLoss: 0.44, valLoss: 0.5 },
  { epoch: 4, trainLoss: 0.36, valLoss: 0.45 },
  { epoch: 5, trainLoss: 0.3, valLoss: 0.43 },
  { epoch: 6, trainLoss: 0.25, valLoss: 0.42 },
  { epoch: 7, trainLoss: 0.22, valLoss: 0.44 },
  { epoch: 8, trainLoss: 0.19, valLoss: 0.46 },
  { epoch: 9, trainLoss: 0.17, valLoss: 0.48 },
  { epoch: 10, trainLoss: 0.15, valLoss: 0.5 },
];

const chartConfig = {
  trainLoss: {
    label: 'Train',
    color: '#8884d8',
  },
  valLoss: {
    label: 'Valid',
    color: '#82ca9d',
  },
} satisfies ChartConfig;

function LossGraph() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart data={lossData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="epoch" />
        <YAxis />
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelFormatter={(_, payload) => {
                const epoch = payload?.[0]?.payload?.epoch;
                return `Epoch ${epoch}`;
              }}
            />
          }
        />
        <Line dataKey="trainLoss" stroke={chartConfig.trainLoss.color} />
        <Line dataKey="valLoss" stroke={chartConfig.valLoss.color} />
      </LineChart>
    </ChartContainer>
  );
}

export default LossGraph;
