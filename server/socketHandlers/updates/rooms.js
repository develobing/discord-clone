const serverStore = require('../../serverStore');

const updateRooms = (toSpecificedTargetId) => {
  const io = serverStore.getSocketServerInstance();
  const activeRooms = serverStore.getActiveRooms();

  if (toSpecificedTargetId) {
    io.to(toSpecificedTargetId).emit('active-rooms', { activeRooms });
  } else {
    io.emit('active-rooms', { activeRooms });
  }
};

module.exports = {
  updateRooms,
};
