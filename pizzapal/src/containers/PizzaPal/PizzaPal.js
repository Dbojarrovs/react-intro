
import React, { useState, useEffect } from "react";
import axios from '../../axios-orders';
import Menu from '../../components/Menu/Menu';
import { Grid, Message } from 'semantic-ui-react';
import Order from '../../components/Order/Order';

const orderToppings = [];

const PizzaPal = (props) => {
   

  const [menuState, setMenuState] = useState({
    toppings: [],
    error: false
  });

  useEffect(() => {
    axios.get('/toppings.json')
    .then(response => {
      setMenuState({toppings: response.data, error: false});
    })
    .catch(error => {
      setMenuState({toppings: menuState.toppings, error: true});
      console.log(error);
    });
}, [])

      const [orderState, setOrderState] = useState({
        totalPrice: 5, 
        chosenToppings: []
      });
     
      const addToppingHandler = (id) => {
        const index = menuState.toppings.findIndex(topping => topping.id === id);
      
      
        // Save the name and price of the chosen topping
    const chosenTopping = {
        id: menuState.toppings[index].id,
        name: menuState.toppings[index].alt,
        price: menuState.toppings[index].price
      };

      console.log(orderState);

       // Add chosen topping object to updatedToppings array
    orderToppings.push(chosenTopping);

     // Calculate the new price
     const newPrice = orderState.totalPrice + menuState.toppings[index].price;
    
    // Update the order state with the new price and updated toppings array
    setOrderState({
        totalPrice: newPrice,
        chosenToppings: orderToppings
      });
    }

    const removeToppingHandler = (id) => {
        // Find topping with matching id from the orderState
        const index = orderState.chosenToppings.findIndex(topping => topping.id === id);
    
        // Get the current price
        let price = orderState.totalPrice; 
    
        // If topping was found, update the price and then remove it
        if(index >= 0){
          price = price - orderState.chosenToppings[index].price;
          orderToppings.splice(index, 1);
        }
    
        // Update order state with updated price and updated toppings array
        setOrderState({
          totalPrice: price,
          chosenToppings: orderToppings
        });
      }

      console.log(orderState);

      const checkoutHandler = () => {
        axios.post('/orders.json', orderState)
        .then(response => {
            alert('Order saved!');
            console.log(response);
        })
        .catch(error => {
        setMenuState({toppings: menuState.toppings, error: true});
        alert('Something went wrong :(');
        console.log(error);
        });
    }

   
    
    let pizzapalMenu = menuState.error ? <Message><p>Pizza Pal menu can't be loaded!</p></Message> : <Message><p>Menu loading...</p></Message>; 
    if (menuState.toppings.length > 0) {
      pizzapalMenu = (
    <Grid divided='vertically' stackable>
        <Grid.Row centered>
        <Menu menu={menuState.toppings} />
        
        </Grid.Row>
       
         <Order 
    menu={menuState.toppings}
    chosenToppings={orderState.chosenToppings}
    totalPrice={orderState.totalPrice}
    toppingAdded={addToppingHandler}
    toppingRemoved={removeToppingHandler}
    checkout={checkoutHandler}
  />

        
  </Grid>
      );
    }
    return (
      <div>
      {pizzapalMenu}
    </div>
  )
    
  
};

export default PizzaPal;