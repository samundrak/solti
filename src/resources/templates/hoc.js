module.exports = `
{{#> simpleLayout }}

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

  {{/ simpleLayout }}
`;
