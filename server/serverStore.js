const { v4: uuid } = require('uuid');

const connectedUsers = new Map();
let io = null;
let activeRooms = [];

const setSocketServerInstance = (socketServer) => {
  io = socketServer;
};

const getSocketServerInstance = () => io;

const addNewConnectedUser = ({ socketId, _userId }) => {
  // Remove user from connectedUsers if already exists
  connectedUsers.forEach((value, key) => {
    if (value._userId === _userId) {
      connectedUsers.delete(key);
    }
  });

  connectedUsers.set(socketId, { _userId });
  console.log('new connected user', connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log('User Disconnected - socketId', socketId);
  }
};

const getActiveConnections = (_userId) => {
  const activeConnections = [];

  connectedUsers.forEach((value, key) => {
    if (value._userId === _userId) {
      activeConnections.push(key);
    }
  });

  return activeConnections;
};

const getOnlineUsers = () => {
  const onlineUsers = [];

  connectedUsers.forEach((value, key) => {
    onlineUsers.push({ _userId: value._userId, socketId: key });
  });

  return onlineUsers;
};

// rooms
const addNewActiveRoom = (userId, socketId) => {
  const newActiveRoom = {
    roomId: uuid(),
    roomCreator: {
      _userId: userId,
      socketId,
    },
    participants: [
      {
        _userId: userId,
        socketId,
      },
    ],
  };
  activeRooms = [...activeRooms, newActiveRoom];

  return newActiveRoom;
};

const getActiveRooms = () => [...activeRooms];

const getActiveRoom = (roomId) => {
  const activeRoom = activeRooms.find((room) => room.roomId === roomId);
  return activeRoom ? { ...activeRoom } : null;
};

const joinActiveRoom = (roomId, newParticipant) => {
  const activeRoom = activeRooms.find((room) => room.roomId === roomId);
  if (!activeRoom) return;

  activeRooms = activeRooms.filter((room) => room.roomId !== roomId);
  const updatedRoom = {
    ...activeRoom,
    participants: [...activeRoom.participants, newParticipant],
  };

  activeRooms.push(updatedRoom);
};

const leaveActiveRoom = (roomId, socketId) => {
  const activeRoom = activeRooms.find((room) => room.roomId === roomId);
  if (!activeRoom) return;

  const newActiveRoom = {
    ...activeRoom,
    participants: activeRoom.participants.filter(
      (participant) => participant.socketId !== socketId
    ),
  };

  activeRooms = activeRooms.filter((room) => room.roomId !== roomId);

  if (newActiveRoom.participants.length > 0) {
    activeRooms.push(newActiveRoom);
  }
};

module.exports = {
  setSocketServerInstance,
  getSocketServerInstance,
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  getOnlineUsers,
  addNewActiveRoom,
  getActiveRooms,
  getActiveRoom,
  joinActiveRoom,
  leaveActiveRoom,
};
