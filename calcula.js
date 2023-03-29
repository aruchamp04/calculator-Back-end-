const express =require('express');

var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


app.post("/",function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1+num2;

    res.send("the result is "+" "+sum);
})

app.listen(4000,function()
{
    console.log("heyy server started");
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})