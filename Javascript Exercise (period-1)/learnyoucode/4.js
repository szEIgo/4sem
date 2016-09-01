var fs = require("fs");
//fs is file system (a function based library)
var filePath = process.argv[2];
// the file path is defined to be the first argument

fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err)
    };

    // the fs.readFile have read the file and now needs to be translated to String
    // so that we can work with it.

    var dataArray = data.toString();

    // The assignment dictated that we should count the lines of the entire text file
    // and put is into an array
    var content = dataArray.split("\n");

    // now we count how many elements there is in the array we just created, and this number
    // is equals to number of lines in the txt file.
    var contentLength = content.length-1;

    //and print it, so it can be tested for wrong/right!
    console.log(contentLength);

})


