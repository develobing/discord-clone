import io from 'socket.io-client';

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
};
