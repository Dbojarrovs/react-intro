const HttpError = require('../utils/http-error');

let TEST_MENU = [
    { id: 0, name: 'mozzarella', price: .75, image: 'images/toppings/mozzarella.jpg', alt: 'Mozzarella' },
    { id: 1, name: 'cheddar', price: .75, image: 'images/toppings/cheddar.jpg', alt: 'Cheddar' },
    { id: 2, name: 'basil', price: .5, image: 'images/toppings/basil.jpg', alt: 'Basil' },
    { id: 3, name: 'tomato', price: .5, image: 'images/toppings/tomato.jpg', alt: 'Tomato' },
    { id: 4, name: 'olives', price: .5, image: 'images/toppings/olives.jpg', alt: 'Olives' },
    { id: 5, name: 'onion', price: .5, image: 'images/toppings/onion.jpg', alt: 'Onion' },
    { id: 6, name: 'pineapple', price: .5, image: 'images/toppings/pineapple.jpg', alt: 'Pineapple' },
    { id: 7, name: 'mushroom', price: .5, image: 'images/toppings/mushroom.jpg', alt: 'Mushroom' },
    { id: 8, name: 'pepper', price: .5, image: 'images/toppings/pepper.jpg', alt: 'Pepper' },
    { id: 9, name: 'chili', price: .5, image: 'images/toppings/chili.jpg', alt: 'Chili' },
    { id: 10, name: 'jalapeno', price: .5, image: 'images/toppings/jalapeno.jpg', alt: 'Jalapeno' },
    { id: 11, name: 'bacon', price: 1, image: 'images/toppings/bacon.jpg', alt: 'Bacon' },
    { id: 12, name: 'ham', price: 1, image: 'images/toppings/ham.jpg', alt: 'Ham' },
    { id: 13, name: 'salami', price: 1, image: 'images/toppings/salami.jpg', alt: 'Salami' },
    { id: 14, name: 'bbq', price: .75, image: 'images/toppings/bbq.jpg', alt: 'BBQ Sauce' },
    { id: 15, name: 'hot', price: .75, image: 'images/toppings/hot.jpg', alt: 'Hot Sauce' },
  ];
const menuController = {
    getMenu(request, response) {
        const menu = TEST_MENU;
    
        if (!menu || menu.length === 0) {
          throw new HttpError('Could not load the menu.', 404);
        }
    
        response.json({ menu }); 
      }
};

module.exports = menuController;