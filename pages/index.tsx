import * as React from 'react';
import Layout from 'components/Layout';
import { GetStaticProps } from 'next';

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
      <Layout>
        <h2>Hello {this.props.name}!</h2>
      </Layout>
    );
  }
}

export const getStaticProps: GetStaticProps<Props> = async function getStaticProps() {
  return {
    props: {
      name: 'Jeff',
    }, // will be passed to the page component as props
  };
};
