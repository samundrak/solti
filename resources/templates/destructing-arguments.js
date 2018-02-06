module.exports = `
{{#> simpleLayout }}

const {{componentName}} = ({ 
    {{#each props}}
       {{this.key}},
    {{/each}}
     ...props }) =>
  <div {...props}>Hello World!</div>
  
{{/ simpleLayout}}
`;
