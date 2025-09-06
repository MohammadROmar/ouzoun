import { CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

export default function ChartConfig() {
  return (
    <>
      <CartesianGrid strokeDasharray="3 3" className="stroke-gray/25" />
      <XAxis dataKey="name" className="text-gray text-xs" />
      <YAxis className="text-gray text-sm" />
      <Tooltip
        cursor={false}
        labelClassName="text-black"
        contentStyle={{
          backgroundColor: 'var(--color-green-light)',
          border: '1px solid var(--color-green)',
          borderRadius: '0.75rem',
        }}
      />
    </>
  );
}
