// Code example demonstrating how to create a simple HTTP server in Node.js using Express.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello, this is a simple HTTP server in Node.js!`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
