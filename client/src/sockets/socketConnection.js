import io from 'socket.io-client';
import {
  setFriends,
  setOnlineUsers,
  setPendingFriendsInvitations,
} from '../store/actions/friendsActions';
import store from '../store';
import { updateDirectChatHistoryIfActive } from '../utils/chat';
import * as webRTCHandler from '../webRTC/webRTCHandler';
import * as roomHandler from '../webRTC/roomHandler';

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
    updateDirectChatHistoryIfActive(data);
  });

  socket.on('room-create', (data) => {
    roomHandler.newRoomCreated(data);
  });

  socket.on('active-rooms', (data) => {
    roomHandler.updateActiveRooms(data);
  });

  socket.on('conn-prepare', (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit('conn-init', { connUserSocketId });
  });

  socket.on('conn-init', (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on('conn-signal', (data) => {
    webRTCHandler.handleSignalingData(data);
  });

  socket.on('room-participant-left', (data) => {
    console.log('user left room');
    webRTCHandler.handleParticipantLeftRoom(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  socket.emit('direct-chat-history', data);
};

export const createNewRoom = () => {
  socket.emit('room-create');
};

export const joinRoom = (data) => {
  socket.emit('room-join', data);
};

export const leaveRoom = (data) => {
  socket.emit('room-leave', data);
};

export const signalPeerData = (data) => {
  socket.emit('conn-signal', data);
};
