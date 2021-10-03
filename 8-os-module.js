const os = require("os");

//Get user Info
const user = os.userInfo();
//Get systeme uptime in seconds
const upSysteme = os.uptime();
//Get os settings
const myOs = {
  name: os.type(),
  release: os.release(),
  memory: os.totalmem(),
  freeMemory: os.freemem(),
};
