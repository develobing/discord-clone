const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /\S+@\S+\.\S+/,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    max: 12,
    min: 6,
    select: false,
  },

  username: {
    type: String,
    required: true,
    max: 12,
    min: 3,
  },
});

module.exports = mongoose.model('User', userSchema);
