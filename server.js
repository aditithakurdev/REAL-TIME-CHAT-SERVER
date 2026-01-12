const http = require("http");
const { Server } = require("socket.io");
const app = require("./src/app");
const socketHandler = require("./src/socket/socket");
require("dotenv").config();

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

socketHandler(io);

const PORT = process.env.PORT || 3005;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
