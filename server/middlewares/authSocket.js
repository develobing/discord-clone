const jwt = require('jsonwebtoken');

const verifySocketToken = async (socket, next) => {
  const token = socket.handshake.auth?.token;
  console.log('token', token);
  console.log('process.env.JWT_SECRET', process.env.JWT_SECRET);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
  } catch (error) {
    console.log('verifySocketToken() - error', error);

    const socketError = new Error('Not authorized');
    return next(socketError);
  }

  next();
};

module.exports = verifySocketToken;
