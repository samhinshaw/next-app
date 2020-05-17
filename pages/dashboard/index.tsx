import * as React from "react";

interface Stuff {}

export default class Dashboard extends React.Component {
  constructor(props: Stuff) {
    super(props);
  }
  public state = {};

  render() {
    return (
      <>
        <div>
          <h2>Dashboard</h2>
        </div>
      </>
    );
  }
}
