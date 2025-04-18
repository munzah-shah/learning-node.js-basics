// At runtime, node will wrap the code in a function to create a module wrapper function instead of running the module directly. This is done to create a private scope for each module, preventing variable name collisions and ensuring that each module has its own context. The module wrapper function (which is in IIFE) looks like this:
//  (function (exports, require, module, __filename, __dirname) {
//    // Your module code here
//  }

// So for (demonstration purposes) the module we created, node will run it like this:
(function (exports, require, module, __filename, __dirname) {
  var url = "https://mylogger.io/log";

  function log(message) {
    // send an http request
    console.log(message);
  }

  module.exports = log;
  moduleexports.log = log;
});
