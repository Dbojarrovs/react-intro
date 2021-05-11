const HttpError = require('../utils/http-error');
const TEST_ORDERS = [
    {
      id : "order1",
      chosenToppings : [ 
          { count : 1, id : 0, name : "Mozzarella", price : 0.75 }, 
          { count : 1, id : 2, name : "Basil", price : 0.5 }, 
          { count : 1, id : 3, name : "Tomato", price : 0.5 } 
      ],
      totalPrice : 6.75,
      date : "Tue 30 Mar 2021",
      details : {
          address : "1 High St",
          method : "Delivery",
          name : "Joe Bloggs",
          phone : "0861234567"
      }
    }, 
    {
      id : "order2",
      chosenToppings : [ 
          { "count" : 2, "id" : 0, "name" : "Mozzarella", "price" : 0.75 }, 
          { "count" : 1, "id" : 2, "name" : "Basil", "price" : 0.5 }, 
          { "count" : 1, "id" : 2, "name" : "Salami", "price" : 1 }, 
          { "count" : 1, "id" : 3, "name" : "Tomato", "price" : 0.5 } 
      ],
      totalPrice : 8.5,
      date : "Tue 30 Mar 2021",
      details : {
          address : "101 Main Street",
          method : "Delivery",
          name : "Anne Other",
          phone : "0861212127"
      }
    }
  ];
const orderController = {

    createOrder(request, response, next) {

        const createdOrder = request.body;
    
        if (!createdOrder.id) {
          throw new HttpError('No order was received.', 406);
        }
    
        TEST_ORDERS.push(createdOrder);
    
        response.status(201).json({ createdOrder });
      }

};

module.exports = orderController;
