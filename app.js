var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var url = require('url');
var express = require('express');
var app = express();
app.locals.users = [];

//begin middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//begin routes
// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('Hello World!');
// });

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  // sendfile is deprecated in favor of sendFile
  // but the latter is tricky. And we'll be using
  // templates soon enough, so this will do.
  res.sendfile('public/page.html');
});

// respond with "Hello World!" on the homepage
app.get('/login', function (req, res) {
  // sendfile is deprecated in favor of sendFile
  // but the latter is tricky. And we'll be using
  // templates soon enough, so this will do.
  res.sendfile('public/page.html');
  cookie.set('hello');
});

app.post('/login', function(req, res) {
  console.log(req.body);
  res.end();
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.post('/login/:user', function (req, res) {
  // Some code to log in a user
  var username = req.params.user;
  req.app.locals.users.push(username);
  console.log(req.body);
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
