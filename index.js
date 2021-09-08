var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
 res.send("Hello world!");
});
app.get('/:timestamp', function(req,res){
    res.json({"unix":"to do tomorrow","natural":"to do tomorrow"})
})
app.listen(port);