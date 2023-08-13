const roomInitializeConnectionHandler = (socket, data) => {
  const { connUserSocketId } = data;

  const initialData = { connUserSocketId: socket.id };
  socket.to(connUserSocketId).emit('conn-init', initialData);
};

module.exports = roomInitializeConnectionHandler;
