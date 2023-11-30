// create web server that listens for requests
// to the path /comments.json, and responds with
// a JSON string of hard-coded comments
var http = require('http');
var comments = require('./comments');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(comments));
});

var port = 8080;
server.listen(port);

console.log("server listening on port " + port);

