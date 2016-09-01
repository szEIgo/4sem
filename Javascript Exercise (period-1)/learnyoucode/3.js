var fs = require("fs");
//fs er file system
var allText = fs.readFileSync(process.argv[2]).toString();


var linesInArray = allText.split('\n');
    //console.log(linesInArray);
console.log(linesInArray.length-1);




