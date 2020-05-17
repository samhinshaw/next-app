import * as React from 'react';
import Layout from 'components/layout';
import Greeting from 'components/greeting';
import useSWR from 'swr';
import { User } from 'models/user';
import fetch from '../utils/fetch';

const Home: React.FunctionComponent = () => {
  const { data: user, error } = useSWR<User>('/api/users', fetch);

  if (error) {
    return <div>failed to load</div>;
  }
  if (typeof user === 'undefined') {
    return <div>loading...</div>;
  }
  return (
    <Layout>
      <Greeting {...user}></Greeting>
    </Layout>
  );
};

export default Home;
