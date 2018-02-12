module.exports = `
{{#if docs}}
/**
 * {{ docs }}
 */
{{/if}}
{{> importReact }}

{{#if isPropTypes}} 
  {{> importPropTypes }}
{{/if}}

{{> @partial-block }}

{{> propTypeDef }}

export default {{componentName}};
`;
