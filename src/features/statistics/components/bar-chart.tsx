'use client';

import { Bar, BarChart, ResponsiveContainer } from 'recharts';

import ChartConfig from './chart-config';

type CustomBarChart = {
  name: string;
  chartData: {
    name: string;
    userCount: number;
  }[];
};

function CustomBarChart({ name, chartData }: CustomBarChart) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="border-none outline-none"
    >
      <BarChart data={chartData}>
        <ChartConfig />
        <Bar
          dataKey="userCount"
          name={name}
          fill="var(--color-green)"
          radius={[16, 16, 0, 0]}
          background={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
