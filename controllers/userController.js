const userModel = require('../models/userModel');

module.exports = {
  getAllUsers: (req, res) => {
    const users = userModel.getAllUsers();
    res.json(users);
  },
  
  getUserById: (req, res) => {
    const id = parseInt(req.params.id);
    const user = userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  },
  
  addUser: (req, res) => {
    const newUser = req.body;
    userModel.addUser(newUser);
    res.status(201).json(newUser);
  }
};
