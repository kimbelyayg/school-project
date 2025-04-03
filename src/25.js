// Example Node.js code for a simple server
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    res.writeHead(200);
    res.end('Hello World\n');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
