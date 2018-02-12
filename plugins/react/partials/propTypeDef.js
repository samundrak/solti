module.exports = `
{{#if isPropTypes}}
 {{componentName}}.propTypes = {
  {{#if props}}
     {{# each props}}
      {{this.key}}: PropTypes.{{this.value}},
     {{/each}}
  {{/if}}
 };
{{/if}}
`;
