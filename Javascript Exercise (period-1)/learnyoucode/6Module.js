module.exports = function(dir, fileType, callback){
var fs =  require('fs');
var path = require('path');
var  result = [];

    fs.readdir(dir, function (err,files) {
    if (err) {
        return callback(err)
    };
        files.forEach(function(file){
        if(path.extname(file) === "." + fileType){
           result.push(file);
        }
        })

        callback(null, result)
    })
};