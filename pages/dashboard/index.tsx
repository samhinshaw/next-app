import * as React from 'react';
import Layout from 'components/layout';
import Chart from './components/chart';

interface Props {
  name?: string;
}

interface State {
  chartHeight: number;
  chartWidth: number;
}

const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 500 },
  { name: 'Page C', uv: 300 },
  { name: 'Page D', uv: 200 },
  { name: 'Page E', uv: 700 },
];

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    chartHeight: 300,
    chartWidth: 500,
  };

  render(): JSX.Element {
    return (
      <Layout>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-indigo-600">1</div>
          <div className="col-span-2 row-span-2">
            <Chart data={data} height={this.state.chartHeight} width={this.state.chartWidth} />
          </div>
          <div className="bg-indigo-600 row-span-2">3</div>
          <div className="bg-indigo-600">4</div>
          <div className="bg-indigo-600 col-span-4">5</div>
        </div>
      </Layout>
    );
  }
}
