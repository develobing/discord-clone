const Conversation = require('../../models/Conversation');
const serverStore = require('../../serverStore');

const updateChatHistory = async (
  conversationId,
  toSpecifiedSocketId = null
) => {
  const conversation = await Conversation.findById(conversationId).populate({
    path: 'messages',
    model: 'Message',
    populate: {
      path: 'author',
      model: 'User',
      select: '_id username',
    },
  });

  if (!conversation) return;

  const { participants, messages } = conversation;
  const io = serverStore.getSocketServerInstance();
  if (toSpecifiedSocketId) {
    // Initial update for the user who sent the message
    return io.to(toSpecifiedSocketId).emit('direct-chat-history', {
      participants,
      messages,
    });
  }

  // Check if users of this converstaion are online and send them the update
  participants.forEach((participant) => {
    const activeConnections = serverStore.getActiveConnections(
      participant._id.toString()
    );

    activeConnections.forEach((socketId) => {
      io.to(socketId).emit('direct-chat-history', { participants, messages });
    });
  });
};

module.exports = { updateChatHistory };
