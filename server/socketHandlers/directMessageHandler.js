const Message = require('../models/Message');
const Conversation = require('../models/Conversation');
const chatUpdates = require('./updates/chat');

const directMessageHandler = async (socket, data) => {
  try {
    const userDetails = socket.user;
    const _userId = userDetails._id;
    const { receiverUserId, content } = data;

    // Create a new message
    const newMessage = new Message({
      type: 'DIRECT',
      author: _userId,
      content,
      date: new Date(),
    });

    // Save the message
    await newMessage.save();

    // Find if conversation exist with this two users - if not create new
    let conversation = await Conversation.findOneAndUpdate(
      {
        participants: {
          $all: [_userId, receiverUserId],
        },
      },
      {
        $push: {
          messages: newMessage._id,
        },
      }
    );

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [_userId, receiverUserId],
        messages: [newMessage._id],
      });
    }

    chatUpdates.updateChatHistory(conversation._id.toString());
  } catch (error) {
    console.log('(directMessageHandler() - error', error);
  }
};

module.exports = directMessageHandler;
