import React, { Children } from 'react';
import Simple from './Simple';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Simple />
      </div>
    );
  }
}
console.log();
export default App;
