const express = require('express');
const userController = require('./controllers/userController');

const app = express();
const port = 3000; 

app.use(express.json());

app.get('/api/users', userController.getAllUsers);
app.get('/api/users/:id', userController.getUserById);
app.post('/api/users', userController.addUser);

app.get('/', (req, res) => {
  res.send('Hello World! This is my API.');
});

app.get('/api/data', (req, res) => {
  const data = {
    name: 'Akshata Bhadti',
    age: 22,
    email: 'akshb@example.com'
  };
  res.json(data); 
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


