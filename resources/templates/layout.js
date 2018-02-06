module.exports = `
{{#> simpleLayout}}

  class {{componentName}} extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (<div>
    {{#each props}}
       <div>{this.props.{{this.key}} }</div>
    {{/each}}
    </div>);
  }
}
{{/ simpleLayout}}
`;
