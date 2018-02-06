module.exports = `
{{#> simpleLayout }}

const {{componentName}} = ({ 
    {{#each props}}
       {{this.key}},
    {{/each}}
    ...props }) =>
  <div
    {{#each props}}
       {{this.key}}={ {{this.key}} }
    {{/each}}
    {...props}
  />
 
{{/simpleLayout}} 
`;

