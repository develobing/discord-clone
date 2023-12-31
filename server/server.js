const express = require('express');
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const friendsRoutes = require('./routes/friendsRoutes');
require('dotenv').config();

const socketServer = require('./socketServer');

const PORT = process.env.PORT || process.env.API_PORT || 5005;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/friends', friendsRoutes);

// Server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Socket Server
socketServer.registerSocketServer(server);

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log('DB Connection Error: ', err);
  });
