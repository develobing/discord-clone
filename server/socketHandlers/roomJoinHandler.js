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
  };

  const roomDetails = serverStore.getActiveRoom(roomId);
  const isAlreadyInRoom = roomDetails.participants.some(
    (participant) => participant._userId === _userId
  );
  if (isAlreadyInRoom) return;

  serverStore.joinActiveRoom(roomId, participantDetails);

  roomsUpdates.updateRooms();
  console.log('roomJoinHandler() - roomDetails', roomDetails);
};

module.exports = roomJoinHandler;
