const verifySocketToken = require('./middlewares/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const disconnectHandler = require('./socketHandlers/disconnectHandler');
const directMessageHandler = require('./socketHandlers/directMessageHandler');
const directChatHistoryHandler = require('./socketHandlers/directChatHistoryHandler');
const roomCreateHandler = require('./socketHandlers/roomCreateHandler');
const roomJoinHandler = require('./socketHandlers/roomJoinHandler');
const roomLeaveHandler = require('./socketHandlers/roomLeaveHandler');
const roomInitializeConnectionHandler = require('./socketHandlers/roomInitializeConnectionHandler');
const roomSignalingDataHandler = require('./socketHandlers/roomSignalingDataHandler');
const serverStore = require('./serverStore');

const registerSocketServer = (server) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      method: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });
  serverStore.setSocketServerInstance(io);

  const emitOnlineUsers = () => {
    const onlineUsers = serverStore.getOnlineUsers();
    io.emit('online-users', { onlineUsers });
  };

  io.use((socket, next) => {
    verifySocketToken(socket, next);
  });

  io.on('connection', (socket) => {
    newConnectionHandler(socket, io);
    emitOnlineUsers();

    socket.on('direct-message', (data) => directMessageHandler(socket, data));

    socket.on('direct-chat-history', (data) => {
      directChatHistoryHandler(socket, data);
    });

    socket.on('room-create', () => {
      roomCreateHandler(socket);
    });

    socket.on('room-join', (data) => {
      roomJoinHandler(socket, data);
    });

    socket.on('room-leave', (data) => {
      roomLeaveHandler(socket, data);
    });

    socket.on('conn-init', (data) => {
      roomInitializeConnectionHandler(socket, data);
    });

    socket.on('conn-signal', (data) => {
      roomSignalingDataHandler(socket, data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
      disconnectHandler(socket);
    });
  });

  setInterval(() => {
    emitOnlineUsers();
  }, 5 * 1000);
};

module.exports = { registerSocketServer };
