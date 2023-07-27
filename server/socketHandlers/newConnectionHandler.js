const serverStore = require('../serverStore');

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  console.log('userDetails', userDetails);

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails._id,
  });
};

module.exports = newConnectionHandler;
