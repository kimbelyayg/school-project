import * as express from 'express';
const app = express();
app.use(express.json());

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  // fetch user data from a database or API
  const userData = { name: 'John Doe', age: 30 };

  // return the user data as JSON
  res.json(userData);
});

// POST /users
app.post('/users', (req, res) => {
  // create a new user and save it to the database
  const newUser = req.body;
  console.log(newUser);
  res.send('User created!');
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  // update a user's data in the database
  const id = req.params.id;
  const updatedUserData = req.body;
  console.log(updatedUserData);
  res.send('User updated!');
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  // delete a user from the database
  const id = req.params.id;
  console.log(id);
  res.send('User deleted!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
