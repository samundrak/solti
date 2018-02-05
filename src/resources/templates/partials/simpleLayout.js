module.exports = `
{{> importReact }}

{{#if isPropTypes}} 
  {{> importPropTypes }}
{{/if}}

{{> @partial-block }}

{{#if isPropTypes}}
 {{componentName}}.propTypes = {};
{{/if}}

export default {{componentName}};
`;
