const express = require('express');
const menuController = require('./controllers/menu-controller');
const router = express.Router();

// routes to be added here
router.get('/', menuController.getMenu);
module.exports = router;
