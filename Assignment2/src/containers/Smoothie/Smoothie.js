import Menu from '../../components/Menu/Menu';
import React, { useState, useEffect } from "react";
import { Grid } from 'semantic-ui-react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

const orderIngredients = [];

const Smoothie = (props) => {

  const [menuState, setMenuState] = useState({
    ingredients: [],
    error: false
  });

  useEffect(() => {
    axios.get('/ingredients.json')
    .then(response => {
      setMenuState({ingredients: response.data});
      console.log(response);
    });
}, [])

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
  
      

      const removeIngredientHandler = (id) => {
        // Find topping with matching id from the orderState
    const index = orderState.chosenIngredients.findIndex(ingredient => ingredient.id === id);

    // Get the current price
    let price = orderState.totalPrice; 

    // If topping was found, update the price and then remove it
    if(index >= 0){
      price = price - orderState.chosenIngredients[index].price;
      orderIngredients.splice(index, 1);
    }

    // Update order state with updated price and updated toppings array
    setOrderState({
      totalPrice: price,
      chosenIngredients: orderIngredients
    });
  }

 

  const checkoutHandler = () => {
    axios.post('/orders.json', orderState)
    .then(response => {
        alert('Order saved!');
        console.log(response);
    });
}

      return (
        <Grid divided='vertically' stackable>
            <Grid.Row centered>
            <Menu menu={menuState.ingredients} />
            
            </Grid.Row>
            <Grid.Row>
            <Order 
   menu={menuState.ingredients}
   ingredientAdded={addIngredientHandler}
   ingredientRemoved={removeIngredientHandler}
   chosenIngredients={orderState.chosenIngredients}
    totalPrice={orderState.totalPrice}
    checkout={checkoutHandler}
  />
            </Grid.Row>
      </Grid>
      )
    };


export default Smoothie;