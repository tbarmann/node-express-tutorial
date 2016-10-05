var express = require('express');
var fs = require('fs');
var _ = require('lodash');
var users = []
var app = express();
var engines = require('consolidate');

fs. readFile('users.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err;
  JSON.parse(data).forEach(function(user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
    users.push(user);
  })

})

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
  res.render('index', {users: users});
});

app.get('/:username', function(req, res) {
  var username = req.params.username;
  res.send(username);
})

var server = app.listen(2999, function(){
  console.log('Server running at http://localhost:' + server.address().port)
});
