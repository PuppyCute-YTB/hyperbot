var http = require('http')

http.createServer(function (req, res) {
  res.write("Online:)");
  res.end();
}).listen(8080);
