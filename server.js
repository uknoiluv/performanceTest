var express = require('express');
var handler = require('./request_handler');


var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.get('/array', handler.getArray);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
