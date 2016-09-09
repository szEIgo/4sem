var fs = require("fs");
var path = require("path");

//fs is file system (a function based library)
var folderDir = process.argv[2];
var fileFormat = "." + process.argv[3];
// the file path is defined to be the first argument

fs.readdir(folderDir,function(err,files) {
    if (err) {
        console.log(err)
    };
    files.forEach(function(file){
        if(path.extname(file) === fileFormat){
            console.log(file);
        }
    })
})