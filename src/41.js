const express = require('express');
const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'User logged in successfully.' });
  } else {
    res.status(401).json({ message: 'Invalid credentials. Please try again.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
