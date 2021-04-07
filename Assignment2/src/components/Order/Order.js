import React from "react";
import { Grid } from 'semantic-ui-react';
import Controls from './Controls/Controls';
import Checkout from './Checkout/Checkout';

const Order = (props) => {
  return (
    <Grid.Row columns={2} centered>
        <Controls 
    menu={props.menu}
    ingredientAdded = {props.ingredientAdded}
    ingredientRemoved = {props.ingredientRemoved}
  />
         <Checkout 
    menu = {props.menu}
    ingredients={props.chosenIngredients}
    price={props.totalPrice}
    checkout={props.checkout}
  />
    </Grid.Row>
  )
};

export default Order;
