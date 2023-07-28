const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log('new connected user', connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log('User Disconnected - socketId', socketId);
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};
