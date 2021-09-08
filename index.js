// Import express...
var express = require('express');
// I create app server...
var app = express();
var port = process.env.PORT || 3000;
// When user call / api from the browser, I will return Hello world text
app.get('/', function(req, res){
 res.send("How to create a server using Express.js, view file index.js!");
});
// When user call / api from the browser, I will return Hello everyone text
app.get('/hello', function (req,res){
    res.send("Hello Everyone!");
});
// When user call /goodbye from the browser, and passes the name as parameter, i will return {{name}}
app.get('/goodbye/:name', function (req,res){
    //from the request, get the parameter labeled with name
    res.send('Goodbye '+req.params.name);
});
// When user call /bonjour from an app as a POST
// I will show bonjour
app.post('/bonjour', function(req,res){
    res.send('Bonjour');
});
// I will listen to port 3000
app.listen(port);