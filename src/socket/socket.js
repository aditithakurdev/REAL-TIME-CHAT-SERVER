const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join chat room
    socket.on('joinRoom', ({ username, room }) => {
      socket.join(room);
      socket.username = username;
      socket.room = room;

      socket.to(room).emit('message', {
        user: 'System',
        text: `${username} joined the room`
      });
    });

    // Receive chat message
    socket.on('chatMessage', (message) => {
      io.to(socket.room).emit('message', {
        user: socket.username,
        text: message
      });
    });

    // Leave room
    socket.on('disconnect', () => {
      if (socket.room) {
        socket.to(socket.room).emit('message', {
          user: 'System',
          text: `${socket.username} left the room`
        });
      }
      console.log('User disconnected:', socket.id);
    });
  });
};

module.exports = socketHandler;
