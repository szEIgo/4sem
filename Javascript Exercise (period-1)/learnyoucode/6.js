var dir = process.argv[2];
var fileType =process.argv[3];
var moduleFile = require('./6Module.js')

moduleFile(dir,fileType,getResult);

   function getResult(errors,files){

      files.forEach(function(file){

          console.log(file);
      })

   }
