const serverStore = require('../serverStore');
const friendsUpdate = require('./updates/friends');
const roomsUpdate = require('./updates/rooms');

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  const _userId = userDetails._id;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    _userId,
  });

  // Update pending friends invitation list
  friendsUpdate.updateFriendsPendingInvitations(_userId);

  // Update friends list
  friendsUpdate.updateFriends(_userId);

  // Update rooms list
  roomsUpdate.updateRooms(socket.id);
};

module.exports = newConnectionHandler;
