import * as React from 'react';

import { User } from 'models/user';

type Props = User;

const Greeting: React.FunctionComponent<Props> = ({ firstName, lastName }: User) => {
  return (
    <h2>
      Hello {firstName} {lastName}!
    </h2>
  );
};

export default Greeting;
