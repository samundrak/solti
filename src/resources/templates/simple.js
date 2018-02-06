module.exports = `
{{#> simpleLayout }}
 class {{componentName}} extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '{{ componentName }}'
        };
    }
  
    render() {
      return (<div> Hello its me, {this.state.name}</div>);
    }
  }
  {{/ simpleLayout }}
`;
