const Conversation = require('../models/Conversation');
const chatUpdates = require('./updates/chat');

const directChatHistoryHandler = async (socket, data) => {
  try {
    const userDetails = socket.user;
    const _userId = userDetails._id;
    const { receiverUserId } = data;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [_userId, receiverUserId],
      },
    });
    if (!conversation) return;

    chatUpdates.updateChatHistory(conversation._id.toString(), socket.id);
  } catch (error) {
    console.log('(directChatHistoryHandler() - error', error);
  }
};

module.exports = directChatHistoryHandler;
