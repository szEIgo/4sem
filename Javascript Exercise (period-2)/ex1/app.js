var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Variables

var result;


var app = express();

//middleware

app.use(bodyParser());

// sets

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


var calculations = [
    {id: 1, desc: 'Results'}

];


app.use('/api/calculator/:operation/:n1/:n2', function(req,res, next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2),
    }
    req.calculatorRequest = calculatorRequest;
    next();
})

app.get('/api/calculator/*', function(req, res){
    var num1= req.calculatorRequest.n1;
    var num2 = req.calculatorRequest.n2;
    switch (req.calculatorRequest.operation){
        case "add": res.status(200).send(num1 + " + " + num2 + " = "+(num1 + num2).toString());
            calculations.push({
                id: calculations.length+1,
                desc: num1 + " + " + num2 + " = " + Number(num1) + Number(num2)
            });
            break;
        case "subtract": res.status(200).send(num1 + " - " + num2 + " = "+(num1 - num2).toString());

            calculations.push({
                id: calculations.length+1,
                desc: num1 + " - " + num2 + " = " + (Number(num1) - Number(num2))
            });
            break;
        case "multiply": res.status(200).send(num1 + " * " + num2 + " = "+(num1 * num2).toString());
               calculations.push({
                id: calculations.length+1,
                desc: num1 + " * " + num2 + " = " + Number(num1) * Number(num2)
            });
            break;
        case  "divide": res.status(200).send(num1 + " / " + num2 + " = "+  (num1 / num2).toString());

            calculations.push({
                id: calculations.length+1,
                desc: num1 + " / " + num2 + " = " + Number(num1) / Number(num2)
            });

            break;
    }

})

//view engine setup

app.get('/', function(req,res){
    res.render('index', {
        title: 'My app',
        calculations: calculations
    });
});





app.post('/calculate', function(req,res){
    var number1 = req.body.number1;
    var number2 = req.body.number2;
    var symbol =  req.body.symbol;


    if(symbol === "*"){

        result = Number(number1) * Number(number2);
        calculations.push({
            id: calculations.length+1,
            desc: number1 + " * " + number2 + " = " + result
        });
    }
    else if(symbol === "/"){
        result = Number(number1) / Number(number2);
        calculations.push({
            id: calculations.length+1,
            desc: number1 + " / " + number2 + " = " + result
        });
    }
    else if(symbol === "-"){
        result = Number(number1) - Number(number2);
        calculations.push({
            id: calculations.length+1,
            desc: number1 + " - " + number2 + " = " + result
        });
    } else
    {
        result = Number(number1) + Number(number2);
        calculations.push({
            id: calculations.length+1,
            desc: number1 + " + " + number2 + " = " + result
        });
    }

    res.redirect('/');

})
app.listen(3000, function(){
    console.log("server started: listening on port" + 3000)
})