const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check if user already exists
    const isUserExist = await User.exists({ email });

    if (isUserExist) {
      return res.status(400).json({
        isSuccess: false,
        message: 'Email already exists',
      });
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user document and save in database
    const user = await User.create({
      email: email.toLowerCase(),
      password: encryptedPassword,
      username,
    });
    user.password = undefined;

    // Create JWT token
    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    // Send response
    res.status(201).json({
      isSuccess: true,
      message: 'User created successfully',
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log('postRegister() - error: ', error);

    res.status(500).json({ isSuccess: false, message: 'Something went wrong' });
  }
};

module.exports = postRegister;
