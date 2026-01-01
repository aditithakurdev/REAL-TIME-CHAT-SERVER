const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Real-Time Chat Server is running');
});

// Routes
app.use('/api/chat', chatRoutes);

module.exports = app;
