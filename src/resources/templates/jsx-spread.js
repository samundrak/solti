module.exports = `
{{#> simpleLayout }}

const {{componentName}} = ({ className, ...props }) =>
  <div
    className={["{{componentName}}", className].join(' ')}
    {...props}
  />
 
{{/simpleLayout}} 
`;

