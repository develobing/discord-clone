import io from 'socket.io-client';
import {
  setFriends,
  setOnlineUsers,
  setPendingFriendsInvitations,
} from '../store/actions/friendsActions';
import store from '../store';

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
    console.log('friends', friends);

    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    console.log('onlineUsers', onlineUsers);
    store.dispatch(setOnlineUsers(onlineUsers));
  });
};
