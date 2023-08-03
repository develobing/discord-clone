const FriendInvitation = require('../../models/FriendInvitation');
const User = require('../../models/User');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const { _id: _userId } = req.user;

    const invitation = await FriendInvitation.findById(id);
    if (!invitation) {
      return res.status(404).json({
        isSuccess: false,
        message: 'Friend invitation not found!',
      });
    }

    // Add friend to user's friends list
    const { sender, receiver } = invitation;
    await Promise.all([
      User.findOneAndUpdate(
        { _id: sender },
        { $addToSet: { friends: receiver } }
      ),
      User.findOneAndUpdate(
        { _id: receiver },
        { $addToSet: { friends: sender } }
      ),
    ]);

    // Remove that inivitation from friend invitations collection
    await FriendInvitation.findByIdAndDelete(id);

    // Update friends list in user collection if the users are online
    friendsUpdates.updateFriends(sender.toString());
    friendsUpdates.updateFriends(receiver.toString());

    // Update pending invitations in user collection
    friendsUpdates.updateFriendsPendingInvitations(_userId);

    // Return the response
    return res.status(200).json({
      isSuccess: true,
      message: 'Friend invitation accepted!',
    });
  } catch (error) {
    console.log('postAccept() - error', error);

    return res.status(500).json({
      isSuccess: false,
      message: 'Something went wrong!',
    });
  }
};

module.exports = postAccept;
