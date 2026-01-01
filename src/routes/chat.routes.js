const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');

router.get('/status', chatController.serverStatus);

// Get available chat rooms
router.get('/rooms', chatController.getRooms);

module.exports = router;
