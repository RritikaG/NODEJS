var http = require('http');

var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey rikku');
});

server.listen(8081,'127.0.0.1');
console.log('hey it worksss');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8081);

