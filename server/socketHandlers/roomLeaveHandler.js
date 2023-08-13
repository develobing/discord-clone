const serverStore = require('../serverStore');
const roomsUpdate = require('./updates/rooms');

const roomLeaveHandler = (socket, data) => {
  const { roomId } = data;
  const activeRoom = serverStore.getActiveRoom(roomId);
  if (!activeRoom) return;
  serverStore.leaveActiveRoom(roomId, socket.id);

  const updatedActiveRoom = serverStore.getActiveRoom(roomId);
  if (updatedActiveRoom) {
    const { participants } = updatedActiveRoom;
    participants.forEach((participant) => {
      const participantSocketId = participant.socketId;
      const data = {
        connUserSocketId: socket.id,
      };
      socket.to(participantSocketId).emit('room-participant-left', data);
    });
  }

  roomsUpdate.updateRooms();
};

module.exports = roomLeaveHandler;
