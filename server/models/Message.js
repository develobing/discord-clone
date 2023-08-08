const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  type: { type: String },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  content: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
  },
});

module.exports = mongoose.model('Message', messageSchema);
