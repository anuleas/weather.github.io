var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var appproject = require('./exportapp');
var cors =require ("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));



app.use('/',appproject);



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })