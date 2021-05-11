

import React from "react";
import './Layout.css';
import { Container } from 'semantic-ui-react';

import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Smoothie from '../../containers/Smoothie/Smoothie';
import YourOrders from '../../containers/YourOrders/YourOrders';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';

const Layout = (props) => {
  return (
    <Container>
      <Nav />
      <Route path="/" exact component={Smoothie} />
    <Route path="/orders" component={YourOrders} />
    <Route path="/place-order" component={PlaceOrder} />
    </Container>
  )
};

export default Layout;