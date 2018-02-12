module.exports = {
  ['jsx-spread']() {
    return {
      props: [{
        key: 'className',
        value: 'string.isRequired',
      }],
    }
  },
  stateless() {
    return {
      props: [{
        key: 'name',
        value: 'string.isRequired'
      }],
    }
  }
};
