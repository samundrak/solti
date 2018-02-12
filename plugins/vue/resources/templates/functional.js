module.exports = `
{{#if docs}}
/**
 * {{ docs }}
 */
{{/if}}
export default {
  functional: true,
  render(createElement, { props, listeners, children }) {
    return createElement(
      '{{ componentName }}',
      {
        attrs: props,
        on: {
          click: listeners.click
        }
      },
      children
    );
  }
};
`;
