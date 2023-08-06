import { chatActions } from '../actions/chatActions';

const initialState = {
  chosenChatDetails: null,
  messages: [],
  chatType: null,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.payload.chatDetails,
        chatType: action.payload.chatType,
      };

    case chatActions.SET_MESSAGTES:
      return {
        ...state,
        messages: action.payload,
      };

    case chatActions.SET_CHAT_TYPE:
      return {
        ...state,
        chatType: action.payload,
      };

    default:
      return state;
  }
};

export default chatReducer;
