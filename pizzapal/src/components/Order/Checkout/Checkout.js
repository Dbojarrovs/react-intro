import React from "react";
import { Grid, Header } from 'semantic-ui-react';
import OrderSummary from './OrderSummary/OrderSummary';

const Checkout = (props) => {
  return (
    <div>
          <Grid.Column width={6} textAlign='right'>

<Header as='h2' textAlign='center' className='step'>
    Step 2: Check out 
</Header>

<OrderSummary />

</Grid.Column>
    </div>
  )
};

export default Checkout;
