// node also contains useful builtin modules of its own that we can use for different purposes. One of them is "path".

const path = require("path");
// The path module provides utilities for working with file and directory paths. It helps in manipulating file paths, resolving relative paths, and extracting information from paths.
// It is a core module, so we don't need to install it separately. We can use it directly by requiring it in our code.

var filePathObj = path.parse(__filename); //this is a function in path module that parses a path string and returns an object containing information about the path of current file.

console.log("file path object ----->", filePathObj);

var dirPathObj = path.parse(__dirname); //this is a function in path module that parses a path string and returns an object containing information about the path of current directory.

console.log("directpry path object ----->", dirPathObj);
