var fs = require("fs");
//fs is file system (a function based library)
var filePath = "/Desktop"
// the file path is defined to be the first argument

fs.readdir(filePath,function(err,files) {
    if (err) {
        console.log(err)
    }
    ;

    var location = files.options.toString()

    console.log(location);
})