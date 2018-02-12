module.exports = `
<template>
  <div>
      Hello {{{{raw}}}} {{name}} {{{{/raw}}}}
  </div>
</template>
{{#if isStyle}}
<style scoped>
div {
 color: pink;
}
</style>
{{/if}}
<script>
{{#if docs}}
/**
 * {{ docs }}
 */
{{/if}}
export default {
  {{> propTypeDef }}
  data: () =>({
    name: '{{componentName}}'
  }),
  methods: {},
}
</script>
`;
