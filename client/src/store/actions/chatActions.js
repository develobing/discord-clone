export const chatTypes = {
  DIRECT: 'DIRECT',
  GROUP: 'GROUP',
};

export const chatActions = {
  SET_CHOSEN_CHAT_DETAILS: 'CHAT.SET_CHOSEN_CHAT_DETAILS',
  SET_MESSAGTES: 'CHAT.SET_MESSAGTES',
  SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE',
};

export const getActions = (dispatch) => {
  return {
    setChosenChatDetails: (chatDetails, chatType) =>
      dispatch(setChosenChatDetails(chatDetails, chatType)),
    setMessages: (messages) => dispatch(setMessages(messages)),
    setChatType: (chatType) => dispatch(setChatType(chatType)),
  };
};

export const setChosenChatDetails = (chatDetails, chatType) => ({
  type: chatActions.SET_CHOSEN_CHAT_DETAILS,
  payload: { chatDetails, chatType },
});

export const setMessages = (messages) => ({
  type: chatActions.SET_MESSAGTES,
  payload: messages,
});

export const setChatType = (chatType) => ({
  type: chatActions.SET_CHAT_TYPE,
  payload: chatType,
});
