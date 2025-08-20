import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

const metricData = [
  { epoch: 1, trainAcc: 0.61, valAcc: 0.63, valF1: 0.62 },
  { epoch: 2, trainAcc: 0.7, valAcc: 0.68, valF1: 0.67 },
  { epoch: 3, trainAcc: 0.77, valAcc: 0.72, valF1: 0.71 },
  { epoch: 4, trainAcc: 0.82, valAcc: 0.75, valF1: 0.74 },
  { epoch: 5, trainAcc: 0.86, valAcc: 0.77, valF1: 0.76 },
  { epoch: 6, trainAcc: 0.89, valAcc: 0.78, valF1: 0.77 },
  { epoch: 7, trainAcc: 0.91, valAcc: 0.78, valF1: 0.77 },
  { epoch: 8, trainAcc: 0.92, valAcc: 0.77, valF1: 0.76 },
  { epoch: 9, trainAcc: 0.94, valAcc: 0.76, valF1: 0.75 },
  { epoch: 10, trainAcc: 0.95, valAcc: 0.75, valF1: 0.74 },
];

const chartConfig = {
  trainAcc: {
    label: 'Train Acc',
    color: '#8884d8',
  },
  valAcc: {
    label: 'Valid Acc',
    color: '#82ca9d',
  },
  valF1: {
    label: 'Valid F1',
    color: '#ff7300',
  },
} satisfies ChartConfig;

function MetricGraph() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart data={metricData}>
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
        <Line dataKey="trainAcc" stroke={chartConfig.trainAcc.color} />
        <Line dataKey="valAcc" stroke={chartConfig.valAcc.color} />
        <Line dataKey="valF1" stroke={chartConfig.valF1.color} />
      </LineChart>
    </ChartContainer>
  );
}

export default MetricGraph;
