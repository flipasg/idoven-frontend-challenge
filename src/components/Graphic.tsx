import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { Domain, Measure } from '../types';

export default function Graphic({
  data,
  domain,
}: {
  data: Measure[];
  domain: Domain;
}) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' type='number' unit='ms' domain={domain}></XAxis>
        <YAxis type='number' unit='uV'></YAxis>
        <Line
          isAnimationActive={false}
          connectNulls={true}
          dot={false}
          type='monotone'
          dataKey='value'
          stroke='#14FC43'
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
