// In node.js, every file is a separate module and the functions and variables inside of that module/file is scoped only to that particular module instead of globally scoped

var url = "https://mylogger.io/log";

function log(message) {
  // send an http request
  console.log(message);
}

// In order to use this module/function in another file, we need to add the functions and variables into exports array of module object as following

module.exports.log = log; // this will export the log function
//Not exporting the url since we don't want to expose it outside of this module - so keeping it private
