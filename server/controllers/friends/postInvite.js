const User = require('../../models/User');
const FriendInvitation = require('../../models/FriendInvitation');

const postInvite = async (req, res) => {
  const { email: targetUserEmail } = req.body;
  const { _id, email } = req.user;

  // Check if the user is the same as the target user
  if (targetUserEmail.toLowerCase() === email.toLowerCase()) {
    return res.status(409).json({
      isSuccess: false,
      message: 'You cannot invite yourself!',
    });
  }

  // Check if the user that is being invited exists
  const targetUser = await User.findOne({ email: targetUserEmail });
  if (!targetUser) {
    return res.status(404).json({
      isSuccess: false,
      message: 'User not found!',
    });
  }

  // Check if the user is already invited
  const isAlreadyInvited = await FriendInvitation.findOne({
    sender: _id,
    receiver: targetUser._id,
  });
  if (isAlreadyInvited) {
    return res.status(409).json({
      isSuccess: false,
      message: 'You have already invited this user!',
    });
  }

  // Check if the user is already a friend
  const isAlreadyFriend = await User.findOne({
    _id,
    friends: { $in: [targetUser._id] },
  });
  if (isAlreadyFriend) {
    return res.status(409).json({
      isSuccess: false,
      message: 'You are already friends with this user!',
    });
  }

  // Add the invitation to the database
  const invitation = await FriendInvitation.create({
    sender: _id,
    receiver: targetUser._id,
  });

  // Return the invitation
  return res.status(200).json({
    isSuccess: true,
    message: `Invitation sent to ${email}`,
    data: { invitation },
  });
};

module.exports = postInvite;
