const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketHandler = require('./src/socket/socket');

const app = express();
const server = http.createServer(app);

// create socket.io instance
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// serve frontend
app.use(express.static('public'));

// pass io to socket file
socketHandler(io);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
