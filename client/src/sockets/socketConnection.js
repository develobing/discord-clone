import io from 'socket.io-client';
import {
  setFriends,
  setOnlineUsers,
  setPendingFriendsInvitations,
} from '../store/actions/friendsActions';
import store from '../store';
import { updateDirectChatHistoryIfActive } from '../utils/chat';

let socket;

export const connectWithSocketServer = (userDetails, token) => {
  socket = io('/', {
    auth: {
      token,
    },
  });

  socket.on('connect', () => {
    console.log('Connected to socket server - socket.id', socket.id);
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;

    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on('friends-list', (data) => {
    const { friends } = data;

    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on('direct-chat-history', (data) => {
    console.log('direct-chat-history', data);
    updateDirectChatHistoryIfActive(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  console.log('data', data);
  console.log('getDirectChatHistory');
  socket.emit('direct-chat-history', data);
};
