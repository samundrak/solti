const wrapComponent = require("./wrapComponent");

module.exports = wrapComponent(`
const {{componentName}} = ComposedComponent =>
  class extends React.Component {
    constructor() {
      super()
      this.state = {}
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
        />
      )
    }
  }
`);
