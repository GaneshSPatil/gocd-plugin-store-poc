var path = require('path');
var express = require('express');
var app = express();
var pluginsJson = require('./plugins.json');

app.get('/', function(req, res){
  res.send(JSON.stringify(pluginsJson));
});

app.get('/download_url', function(req, res){
  	res.send(pluginsJson.plugins[req.query.id].download_url);
});

app.listen(3000);
console.log("Server is listening on port: 3000");
