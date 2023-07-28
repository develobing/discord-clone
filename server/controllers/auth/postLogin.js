const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      '+password'
    );

    if (!user)
      return res.status(400).json({
        isSuccess: false,
        message: 'Invalid credentials. Please try again.',
      });

    // Check if password is correct
    const isPasswordMatched = await bcrypt.compare(password, user?.password);

    if (!isPasswordMatched)
      return res.status(400).json({
        isSuccess: false,
        message: 'Invalid credentials. Please try again.',
      });
    user.password = undefined;

    // Create JWT token
    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    // Send response
    res.status(200).json({
      isSuccess: true,
      message: 'User logged in successfully',
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log('postLogin() - error: ', error);

    res.status(500).json({ isSuccess: false, message: 'Something went wrong' });
  }
};

module.exports = postLogin;
