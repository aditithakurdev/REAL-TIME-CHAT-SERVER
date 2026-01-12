const express = require('express');
const chatRoutes = require('./routes/chat.routes');
const app = express();
require("dotenv").config();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Real-Time Chat Server is running');
});

// Routes
app.use('/api/chat', chatRoutes);

module.exports = app;