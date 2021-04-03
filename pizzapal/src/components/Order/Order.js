import React from "react";
import { Grid } from 'semantic-ui-react';
import Controls from './Controls/Controls';
import Checkout from './Checkout/Checkout';

const Order = (props) => {
  return (
    <div>
         <Grid.Row columns={2} centered>
        <Controls menu={props.menu}/>
        <Checkout />
    </Grid.Row>
    </div>
  )
};

export default Order;
