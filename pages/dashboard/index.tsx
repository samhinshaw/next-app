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
      <div className="grid grid-cols-3 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    );
  }
}
