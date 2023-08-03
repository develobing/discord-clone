const FriendInvitation = require('../../models/FriendInvitation');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { _id: _userId } = req.user;

    // Remove that inivitation from friend invitations collection
    const isInvitationExists = await FriendInvitation.exists({ _id: id });
    if (isInvitationExists) {
      await FriendInvitation.findByIdAndDelete(id);
    }

    // Update pending invitations in user collection
    friendsUpdates.updateFriendsPendingInvitations(_userId);

    res.status(200).json({
      isSuccess: true,
      message: 'Friend invitation rejected!',
    });
  } catch (error) {
    console.log('postReject() - error', error);

    return res.status(500).json({
      isSuccess: true,
      message: 'Something went wrong!',
    });
  }
};

module.exports = postReject;
