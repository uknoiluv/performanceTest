var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});