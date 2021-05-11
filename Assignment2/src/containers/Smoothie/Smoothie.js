import React, { useState, useEffect } from "react";
import { Grid, Message } from 'semantic-ui-react';

import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';



const Smoothie = (props) => {

  const [menuState, setMenuState] = useState({
    ingredients: [],
    error: false
  });

  useEffect(() => {
    axios.get('/ingredients.json')
    .then(response => {
      setMenuState({ingredients: response.data});
    })
    .catch(error => {
      setMenuState({ingredients: menuState.ingredients, error: true});
      console.log(error);
    });
}, [])


const [orderState, setOrderState] = useState({
  totalPrice: 
    props.location.state ? 
    props.location.state.order.totalPrice : 3, 
  chosenIngredients: 
    props.location.state ? 
    props.location.state.order.chosenIngredients: []
});  

window.history.replaceState('/', undefined);


      const addIngredientHandler = (id) => {
        let order = {...orderState};

        const menuIndex = menuState.ingredients.findIndex(ingredient => ingredient.id === id);
    
        // check if the topping has already been added to the orderToppings array
    const orderIndex = order.chosenIngredients.findIndex(ingredient => ingredient.id === id);
         // if so, increase its count by 1
    if (orderIndex > -1){
      order.chosenIngredients[orderIndex].count++;
    }
    // otherwise (i.e. this topping is being added for the first time)
    // create this topping and add it to the order toppings array
    else{
        // Save the name and price of the chosen topping
        const chosenIngredient = {
          id: menuState.ingredients[menuIndex].id,
          name: menuState.ingredients[menuIndex].alt,
          price: menuState.ingredients[menuIndex].price,
          count: 1
        };
        order.chosenIngredients.push(chosenIngredient);
      }
       
        // Calculate the new price
        const newPrice = orderState.totalPrice + menuState.ingredients[menuIndex].price;
    
        // Update the order state with the new price and updated toppings array
        setOrderState({
          totalPrice: newPrice,
          chosenIngredients: order.chosenIngredients
        });
      }
  
      

      const removeIngredientHandler = (id) => {
        let order = {...orderState};
        // Find topping with matching id from the orderState
    const index = order.chosenIngredients.findIndex(ingredient => ingredient.id === id);

    // Get the current price
    let price = order.totalPrice; 

    // If topping was found, update the price and then remove it
    if(index >= 0){
      price = price - order.chosenIngredients[index].price;
      order.chosenIngredients[index].count--;
    

     // If the count is now 0, remove the topping completely
     if(order.chosenIngredients[index].count < 1){
      order.chosenIngredients.splice(index, 1);
    }
      }
    // Update order state with updated price and updated toppings array
    setOrderState({
      totalPrice: price,
      chosenIngredients: order.chosenIngredients
    });
  }

 

  const checkoutHandler = () => {
    props.history.push({
      pathname: 'place-order', 
      state: {
        order: orderState, 
        menu: menuState.ingredients
      }
    });
   
}

let smoothieMenu = menuState.error ? <Message><p>Smoothie App menu can't be loaded!</p></Message> : <Message><p>Menu loading...</p></Message>;

if (menuState.ingredients.length > 0) {
  smoothieMenu = (
      <Grid divided='vertically' stackable>
      <Grid.Row centered>
          <Menu menu={menuState.ingredients} />
      </Grid.Row>
      <Order 
          menu={menuState.ingredients}
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          chosenIngredients={orderState.chosenIngredients}
           totalPrice={orderState.totalPrice}
           checkout={checkoutHandler}
      />
      </Grid>
  );
}
      return (
        <div>
      {smoothieMenu}
    </div>
      )
    };


export default Smoothie;