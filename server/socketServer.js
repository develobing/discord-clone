const verifySocketToken = require('./middlewares/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const disconnectHandler = require('./socketHandlers/disconnectHandler');

const registerSocketServer = (server) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      method: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });

  io.use((socket, next) => {
    verifySocketToken(socket, next);
  });

  io.on('connection', (socket) => {
    console.log('New client connected - socket.id', socket.id);

    newConnectionHandler(socket, io);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
      disconnectHandler(socket);
    });
  });
};

module.exports = { registerSocketServer };
