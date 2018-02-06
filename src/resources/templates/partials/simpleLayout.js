module.exports = `
{{> importReact }}

{{#if isPropTypes}} 
  {{> importPropTypes }}
{{/if}}

{{> @partial-block }}

{{> propTypeDef }}

export default {{componentName}};
`;
