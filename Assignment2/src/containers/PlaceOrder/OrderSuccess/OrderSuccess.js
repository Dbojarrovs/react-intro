import React from "react";
import { Header, Segment, Image } from 'semantic-ui-react';

const OrderSuccess = (props) => {
  return (
    <Segment color='green'>
    <Header as='h2' textAlign='center' color='green'>
      Your Order has been placed!
    </Header>
    <Image src='/images/delivery.gif' size='medium' centered />
</Segment>
  )
};

export default OrderSuccess;
