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
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    payload: friends,
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    payload: onlineUsers,
  };
};

export const setPendingFriendsInvitations = (pendingInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    payload: pendingInvitations,
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

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);
    const responseData = response.data || {};
    const { message, isSuccess } = responseData;

    if (isSuccess) {
      dispatch(openAlertMessage('Invitation accepted successfully!'));
    } else {
      const errorMessage = message || 'Something went wrong!';
      dispatch(openAlertMessage(errorMessage));
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);
    const responseData = response.data || {};
    const { message, isSuccess } = responseData;

    if (isSuccess) {
      dispatch(openAlertMessage('Invitation rejected successfully!'));
    } else {
      const errorMessage = message || 'Something went wrong!';
      dispatch(openAlertMessage(errorMessage));
    }
  };
};
