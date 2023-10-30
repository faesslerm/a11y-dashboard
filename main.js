var http = require('http');
var fs = require('fs').promises;
var path = require('path');

var server = http.createServer((req, res) => {
    var contentType = '';
    if (req.url.match('\.css$')) {
        contentType = 'text/css';
    } else {
        contentType = 'text/html';
    }

    const route = path.join(__dirname, 'public', req.url);
    fs.readFile(route)
        .then(content => {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(content);
            res.end();
        })
        .catch(err => {
            res.writeHead(500);
            console.error(err);
            res.write('Something went wrong!');
            res.end();
            return;
        });
});

const PORT = 3000;
server.listen(PORT);

console.log(`Available on: http://127.0.0.1:${PORT}`);