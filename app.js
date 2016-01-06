var http = require('http');

var port = process.env.port || 4000;
var server = http.createServer(function handler(request, response) {
  response.end('hello world');
});

// connect to db!

server.listen(port, function() {
  console.log('server is listening on port ' + port);
});
