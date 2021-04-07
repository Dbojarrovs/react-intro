import Menu from '../../components/Menu/Menu';
import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import Order from '../../components/Order/Order';

const orderIngredients = [];

const Smoothie = (props) => {

    const [menuState, setMenuState] = useState({
      ingredients: [
          { id: 0, name: 'cherry', price: .75, image: 'images/smoothie/cherry.jpg', alt: 'Cherry' },
          { id: 1, name: 'apple', price: .75, image: 'images/smoothie/apple.jpg', alt: 'Apple' },
          { id: 2, name: 'banana', price: .5, image: 'images/smoothie/banana.jpg', alt: 'Banana' },
          { id: 3, name: 'blueberry', price: .5, image: 'images/smoothie/blueberry.jpg', alt: 'Blueberry' },
          { id: 4, name: 'kiwi', price: .5, image: 'images/smoothie/kiwi.jpg', alt: 'Kiwi' },
          { id: 5, name: 'orange', price: .5, image: 'images/smoothie/orange.jpg', alt: 'Orange' },
          { id: 6, name: 'strawberry', price: .75, image: 'images/smoothie/strawberry.jpg', alt: 'Strawberry' },
          { id: 7, name: 'watermelon', price: .5, image: 'images/smoothie/watermelon.jpg', alt: 'Watermelon' },
          { id: 8, name: 'coconut', price: .75, image: 'images/smoothie/coconut.jpg', alt: 'Coconut' },
          { id: 9, name: 'melon', price: .5, image: 'images/smoothie/melon.jpg', alt: 'Melon' }
         
        ]
      });

      const [orderState, setOrderState] = useState({
        totalPrice: 5, 
        chosenIngredients: []
      });

      const addIngredientHandler = (id) => {
        const index = menuState.ingredients.findIndex(ingredient => ingredient.id === id);
    
        // Save the name and price of the chosen topping
        const chosenIngredient = {
          id: menuState.ingredients[index].id,
          name: menuState.ingredients[index].alt,
          price: menuState.ingredients[index].price
        };
    
        // Add chosen topping object to updatedToppings array
        orderIngredients.push(chosenIngredient);
    
        // Calculate the new price
        const newPrice = orderState.totalPrice + menuState.ingredients[index].price;
    
        // Update the order state with the new price and updated toppings array
        setOrderState({
          totalPrice: newPrice,
          chosenIngredients: orderIngredients
        });
      }
  
      console.log(orderState);

      return (
        <Grid divided='vertically' stackable>
            <Grid.Row centered>
            <Menu menu={menuState.ingredients} />
            </Grid.Row>
            <Grid.Row>
            <Order 
   menu={menuState.ingredients}
   ingredientAdded={addIngredientHandler}
  />
            </Grid.Row>
      </Grid>
      )
    };


export default Smoothie;