const serverStore = require('../serverStore');
const roomsUpdates = require('./updates/rooms');

const roomJoinHandler = (socket, data) => {
  const { roomId } = data;
  const userDetails = socket.user;
  const _userId = userDetails._id;
  const username = userDetails.username;

  const participantDetails = {
    _userId,
    username,
    socketId: socket.id,
  };

  const roomDetails = serverStore.getActiveRoom(roomId);
  const isAlreadyInRoom = roomDetails.participants.some(
    (participant) => participant._userId === _userId
  );
  if (isAlreadyInRoom) return;

  serverStore.joinActiveRoom(roomId, participantDetails);

  // Send information to the users in the room that they should prepare for incoming connection
  roomDetails.participants.forEach((participant) => {
    const { socketId } = participant;
    if (socketId === participantDetails.socketId) return;

    socket.to(socketId).emit('conn-prepare', {
      connUserSocketId: participantDetails.socketId,
    });
  });

  roomsUpdates.updateRooms();
};

module.exports = roomJoinHandler;
