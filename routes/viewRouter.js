const express = require('express');
const checkUser = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', checkUser);

module.exports = router; 