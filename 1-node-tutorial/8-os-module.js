const os = require("os");

// info about currrent user
const user = os.userInfo();
console.log(user);

// method returns the systme uptime in seconds
console.log(`The Systme Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
