let http = require('http');
// let request = require('request');

let server = http.createServer((function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Word\n");
}));

server.listen(3000);

