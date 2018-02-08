class ReactPlugin {
  apply(solti) {
    solti.hooks.init.tap("React", () => {
      console.log("I am plugin from React");
    });
  }
}
ReactPlugin.name = "ReactPlugin";
module.exports = ReactPlugin;
