import store from '../store';
import { setMessages } from '../store/actions/chatActions';

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // find id of the user from token and id from active conversation
  const state = store.getState();
  const receiverId = state.chat.chosenChatDetails?._id;
  const userId = state.auth.userDetails?._id;

  if (receiverId && userId) {
    const userInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      userInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  userInConversation,
  messages,
}) => {
  const isSameConversationActive = participants.every((participantId) =>
    userInConversation.includes(participantId)
  );

  if (isSameConversationActive) store.dispatch(setMessages(messages));
};
