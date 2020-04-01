const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    const parsed_url = url.parse(req.url);
    const path = parsed_url.pathname;
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end(path);
}).listen(3456);
console.log('Server running at http://localhost:3456/');