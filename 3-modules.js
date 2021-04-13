// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is a module (by default)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative');
require('./7-play-around');
sayHi('ronny')
sayHi(names.adelard)
sayHi(names.daniella)