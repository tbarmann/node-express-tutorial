var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, there world!');
});

var server = app.listen(2999, function(){
  console.log('Server running at http://localhost:' + server.address().port)
});
