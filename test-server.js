const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from simple server!');
});

server.listen(3000, () => {
  console.log('Simple server running on port 3000');
});