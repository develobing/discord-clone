const User = require('../../models/User');
const FriendInvitation = require('../../models/FriendInvitation');
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitations = async (_userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiver: _userId,
    }).populate('sender');

    // Find if user of specified id is connected to socket server
    const recieverList = serverStore.getActiveConnections(_userId);
    const io = serverStore.getSocketServerInstance();

    recieverList.forEach((socketId) => {
      io.to(socketId).emit('friends-invitations', {
        pendingInvitations,
      });
    });
  } catch (error) {
    console.log('updateFriendsPendingInvitations() - error', error);
  }
};

const updateFriends = async (userId) => {
  try {
    // Find if user of specified id is connected to socket server
    const recieverList = serverStore.getActiveConnections(userId);
    if (!recieverList.length) return;

    const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
      'friends',
      '_id username email'
    );
    const friends = user.friends || [];

    // if (user) {
    //   const friends = user.friends.map((friend) => ({
    //     id: friend._id,
    //     name: friend.username,
    //     email: friend.email,
    //   }));
    // }

    // Get socket server instance
    const io = serverStore.getSocketServerInstance();

    recieverList.forEach((socketId) => {
      io.to(socketId).emit('friends-list', {
        friends,
      });
    });
  } catch (error) {
    console.log('updateFriends() - error', error);
  }
};

module.exports = {
  updateFriendsPendingInvitations,
  updateFriends,
};
