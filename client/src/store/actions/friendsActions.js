import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const friendsActions = {
  SET_FRIENDS: 'SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'SET_ONLINE_USERS',
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);
    const responseData = response.data || {};
    const { message, isSuccess } = responseData;

    if (isSuccess) {
      dispatch(openAlertMessage('Invitation sent successfully!'));
      closeDialogHandler();
    } else {
      const errorMessage = message || 'Something went wrong!';
      dispatch(openAlertMessage(errorMessage));
    }
  };
};
