const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome Mr Nijimbere');
    }
    // res.write();
    // res.end();
    if(req.url === '/about') {
        res.end('Here is my history book')
    }
    res.end(`
    <h1>Haibo!!</h1>
    <p>We can't find the page that you are looking for</p>
    <a href='/'>back home</a>
    `)
});

server.listen(5000);