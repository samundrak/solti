module.exports = `
  {{#if isPropTypes}}
    props: {
      {{#each props}}
        {{this.key}}:{{this.value}},
      {{/each}}  
    },
  {{/if}}
  {{#unless isPropTypes}}
    props: [
          {{#each props}}
           '{{this.key}}',
          {{/each}}
    ],
  {{/unless}}
`;
