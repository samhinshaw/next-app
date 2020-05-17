import * as React from 'react';

interface Props {
  name: string;
}
interface State {
  name: string;
}

export default class Home extends React.Component<Props, State> {
  state = {
    name: 'Bob',
  };

  constructor(props: Props) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <>
        <h2>Hello {this.props.name}!</h2>
      </>
    );
  }
}
