import Menu from '../../components/Menu/Menu';
import React, { useState, useEffect } from "react";
import { Grid, Message } from 'semantic-ui-react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import { v4 as uuidv4 } from 'uuid';

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
    })
    .catch(error => {
      setMenuState({ingredients: menuState.ingredients, error: true});
      console.log(error);
    });
}, [])


      const [orderState, setOrderState] = useState({
        totalPrice: 3, 
        chosenIngredients: []
      });

      const addIngredientHandler = (id) => {
        const index = menuState.ingredients.findIndex(ingredient => ingredient.id === id);
    
        // check if the topping has already been added to the orderToppings array
    const orderIndex = orderIngredients.findIndex(ingredient => ingredient.id === id);
         // if so, increase its count by 1
    if (orderIndex > -1){
      orderIngredients[orderIndex].count++;
    }
    // otherwise (i.e. this topping is being added for the first time)
    // create this topping and add it to the order toppings array
    else{
        // Save the name and price of the chosen topping
        const chosenIngredient = {
          id: menuState.ingredients[index].id,
          name: menuState.ingredients[index].alt,
          price: menuState.ingredients[index].price,
          count: 1
        };
        orderIngredients.push(chosenIngredient);
      }
       
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
      price = price - orderIngredients[index].price;
      orderIngredients[index].count--;
    

     // If the count is now 0, remove the topping completely
     if(orderIngredients[index].count < 1){
      orderIngredients.splice(index, 1);
    }
      }
    // Update order state with updated price and updated toppings array
    setOrderState({
      totalPrice: price,
      chosenIngredients: orderIngredients
    });
  }

 

  const checkoutHandler = () => {
     // get order from orderState
     let order = orderState;

     // add unique id
     order.id = uuidv4();

     // create formatted date
     let orderDate = new Date();

     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

     let dayNum = orderDate.getDay();
     let day = days[dayNum];

     let monthNum = orderDate.getMonth();
     let month = months[monthNum];

     let date = orderDate.getDate();
     let year = orderDate.getFullYear();

     // saves date in the format "Fri 19 Mar 2021"
     let formattedDate = day + " " + date + " " + month + " " + year;

     // add formattedDate to order
     order.date = formattedDate;

    axios.post('/orders.json', order)
    .then(response => {
        alert('Order saved!');
   // set order state and orderToppings back to starting values
   setOrderState({
    totalPrice: 3,
    chosenIngredients: []
  });
  orderIngredients=[];
})
    .catch(error => {
      setMenuState({ingredients: menuState.ingredients, error: true});
      alert('Something went wrong :(');
      console.log(error);
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