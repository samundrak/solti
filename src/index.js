const argv = require('yargs').argv;
const Solti = require('./Solti');

const solti = new Solti(argv);
solti.start();
