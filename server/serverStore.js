const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log('new connected user', connectedUsers);
};

module.exports = {
  addNewConnectedUser,
};
