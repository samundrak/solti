import React from 'react';

class Simple extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Simple',
    };
  }

  render() {
    return <div> Hello its me,as {this.state.name}</div>;
  }
}

export default Simple;
