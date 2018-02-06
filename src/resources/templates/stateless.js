module.exports = `
{{#> simpleLayout }}

const {{componentName}} = (props) => {
    const style = {
      fontWeight: "bold",
      color: 'green',
    }
  
    return <div style={style}>{props.name}</div>
  }

{{/simpleLayout}}
  `;
