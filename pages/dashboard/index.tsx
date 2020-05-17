import * as React from 'react';
import Layout from 'components/Layout';

interface Stuff {
  name?: string;
}

export default class Dashboard extends React.Component {
  constructor(props: Stuff) {
    super(props);
  }
  public state = {};

  render(): JSX.Element {
    return (
      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">4</div>
          <div className="">5</div>
          <div className="">6</div>
          <div className="">7</div>
          <div className="">8</div>
        </div>
      </Layout>
    );
  }
}
