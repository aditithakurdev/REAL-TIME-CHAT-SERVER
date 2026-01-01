exports.serverStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Real-Time Chat Server is running'
  });
};

exports.getRooms = (req, res) => {
  // Static rooms for now (can be dynamic later)
  const rooms = ['general', 'tech', 'random'];

  res.status(200).json({
    success: true,
    rooms
  });
};
