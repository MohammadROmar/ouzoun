'use client';

import { LineChart, Line, ResponsiveContainer } from 'recharts';
import ChartConfig from './chart-config';

type CustomLineChartProps = {
  name: string;
  data: { name: string; proceduresCount: number }[];
};

function CustomLineChart({ name, data }: CustomLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <ChartConfig />
        <Line
          name={name}
          type="monotone"
          dataKey="proceduresCount"
          stroke="var(--color-green)"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
