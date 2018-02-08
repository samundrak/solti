class VuePlugin {
  apply(solti) {
    solti.hooks.init.tap("Vue", () => {
      console.log("I am plugin from vue");
    });
  }
}
VuePlugin.name = "VuePlugin";
module.exports = VuePlugin;
