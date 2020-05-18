import * as React from 'react';
import Layout from 'components/layout';
import Chart from './components/chart';

interface Props {
  name?: string;
}

interface State {
  name: string;
}

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    name: '',
  };

  render(): JSX.Element {
    return (
      <Layout>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-indigo-600">1</div>
          <div className="col-span-2 row-span-2">
            <Chart />
          </div>
          <div className="bg-indigo-600 row-span-2">3</div>
          <div className="bg-indigo-600">4</div>
          <div className="bg-indigo-600 col-span-4">5</div>
        </div>
      </Layout>
    );
  }
}
