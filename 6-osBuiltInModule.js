// os is another node built in module which provides different methods that provides information about the operating system of your machine. We're using some of them methods down here:

const os = require("os");

var totalMemory = os.totalmem(); //this is a function in os module that returns the total amount of system memory in bytes.

var freeMemory = os.freemem(); //this is a function in os module that returns the amount of free system memory in bytes.

var userInfo = os.userInfo(); //this is a function in os module that returns information about the current user of the operating system.

console.log("Total Memory ----->", totalMemory);
console.log("Free Memory ----->", freeMemory);
console.log("User Info ----->", userInfo);
