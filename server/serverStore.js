const connectedUsers = new Map();
let io = null;

const setSocketServerInstance = (socketServer) => {
  io = socketServer;
};

const getSocketServerInstance = () => io;

const addNewConnectedUser = ({ socketId, _userId }) => {
  connectedUsers.set(socketId, { _userId });
  console.log('new connected user', connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log('User Disconnected - socketId', socketId);
  }
};

const getActiveConnections = (_userId) => {
  const activeConnections = [];

  connectedUsers.forEach((value, key) => {
    if (value._userId === _userId) {
      activeConnections.push(key);
    }
  });

  return activeConnections;
};

const getOnlineUsers = () => {
  const onlineUsers = [];

  connectedUsers.forEach((value, key) => {
    onlineUsers.push({ _userId: value._userId, socketId: key });
  });

  return onlineUsers;
};

module.exports = {
  setSocketServerInstance,
  getSocketServerInstance,
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  getOnlineUsers,
};
