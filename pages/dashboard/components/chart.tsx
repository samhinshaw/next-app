import * as React from 'react';

import { LineChart, Line } from 'recharts';

interface Dimensions {
  height: number;
  width: number;
  data: any;
}

type Props = Dimensions;

const Chart: React.FunctionComponent<Props> = ({ height, width, data }: Props) => (
  <LineChart width={width} height={height} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export default Chart;
