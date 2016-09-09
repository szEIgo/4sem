var bl = require('bl');
var http = require('http');
var urlsArray = [process.argv[2], process.argv[3],process.argv[4]];
var dataArray = [];

function httpGetter(index){
    http.get(urlsArray[index], function (response){

        response.pipe(bl(function (err, data) {

        dataArray[index] = data.toString();
            console.log(data.toString());

        }))
    })

}

for(var i = 0; i<3; i++){
    httpGetter(i);
}

function logData(){
    for(var i = 0; i<3; i++){
        console.log(dataArray);
    }
}
logData();