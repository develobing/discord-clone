const serverStore = require('../serverStore');
const roomsUpdates = require('./updates/rooms');

const roomCreateHandler = (socket) => {
  const socketId = socket.id;
  const userDetails = socket.user;
  const _userId = userDetails._id;

  const roomDetails = serverStore.addNewActiveRoom(_userId, socketId);

  socket.emit('room-create', {
    roomDetails,
  });

  roomsUpdates.updateRooms();
};

module.exports = roomCreateHandler;
