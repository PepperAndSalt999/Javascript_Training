//test context : understanding module.exports
//using module.exports without a function name seems only importable with the name of the file

const singleton = require("./1_module");
console.log(singleton());

//the module exported will be under the form of an anonymous function, that you can execute outside of the file
//a module is litteraly an API to the function you export.

//as an additional note, the module seems to act like a pocket door to the context of the file where it has be declared.
//we can indeed access the context of the file inside of the module function, even by executing that function after export.
//a good analogy would be a pocket dimension
//a module is a pocket dimension that you can easily transport, duplicate and give to other dimensions