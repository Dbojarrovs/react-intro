const express = require('express');
const menuController = require('./controllers/menu-controller');
const orderController = require('./controllers/order-controller');
const userController = require('./controllers/user-controller');

const router = express.Router();

router.get('/', menuController.getMenu);
router.post('/checkout', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
router.get('/users/:uid', userController.getUserById);

module.exports = router;