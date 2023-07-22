const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next) => {
  const authorization = req.headers['authorization'];
  const token = authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({
      isSuccess: false,
      message: 'A token is required for authentication',
    });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('verifyToken() - error: ', error);

    return res.status(401).json({
      isSuccess: false,
      message: 'Invalid Token',
    });
  }
};

module.exports = verifyToken;
