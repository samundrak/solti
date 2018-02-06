module.exports = `
{{#> simpleLayout }}

class {{componentName}} extends React.Component {
  constructor() {
    super()
    this.state = {value: ""}
  }

  render() {
    return   <input
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
  }
}

{{/ simpleLayout}}
`;
