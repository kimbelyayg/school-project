const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/data', (req, res) => {
  const data = { name: 'Alice', age: 30 };
  res.json(data);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
