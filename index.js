var express = require('express');
var app = express();
var path = require('path');
 
app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/about.html', function (req, res) {
    res.sendFile(path.join(__dirname + "/about.html"));
});
 
console.log();

app.listen(3000);