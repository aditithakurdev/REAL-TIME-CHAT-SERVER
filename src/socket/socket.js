module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('joinroomName', (roomName) => {
      if (!roomName) return;

      if (socket.roomName === roomName) return;

      socket.roomName = roomName;
      socket.join(roomName);

      socket.to(roomName).emit('message', ' A user joined the roomName');
    });

    socket.on('chatMessage', ({ roomName, message }) => {
      if (!roomName || !message || message.trim() === '') return;

      io.to(roomName).emit('message', message);
    });

    socket.on('disconnect', () => {
      if (socket.roomName) {
        socket.to(socket.roomName).emit('message', 'A user left the roomName');
      }
      console.log('User disconnected:', socket.id);
    });
  });
};
