import * as React from 'react';

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
      <>
        <div>
          <h2>Dashboard</h2>
        </div>
      </>
    );
  }
}
