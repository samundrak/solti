module.exports = children => `
{{> importReact }}
{{#if isPropTypes}} 
  {{> importPropTypes }}
{{/if}}
${children}
{{#if isPropTypes}}
 {{componentName}}.propTypes = {};
{{/if}}
  export default {{componentName}};
`;
