let users = [];

module.exports = {
  getAllUsers: () => users,
  getUserById: (id) => users.find(user => user.id === id),
  addUser: (user) => {
    user.id = users.length + 1;
    users.push(user);
  }
};
