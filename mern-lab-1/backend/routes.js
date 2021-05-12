const express = require('express');

const router = express.Router();
const menuController = require('./controllers/menu-controller');
const orderController = require('./controllers/order-controller');

// routes to be added here
router.get('/', menuController.getMenu);
router.post('/checkout', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
module.exports = router;