// CommonJS, every file in node is a module (bydefault)
// Modules - Encapsulated Code (only share minimun)

const names = require("./4-names");
// const { jobair, pintu } = require("./4-names");
const sayHi = require("./5-utils");
// console.log(names);
const data = require("./6-alternative-flavour");
// console.log(data);
require("./7-mind-granade");

// sayHi("Sumon");
// sayHi(names.jobair);
// sayHi(names.pintu);
// sayHi(jobair);
// sayHi(pintu);
