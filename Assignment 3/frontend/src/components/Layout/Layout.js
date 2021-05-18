

import React from "react";
import { Container } from 'semantic-ui-react';
import {Route} from 'react-router-dom';

import './Layout.css';

import Nav from '../Nav/Nav';
import Smoothie from '../../containers/Smoothie/Smoothie';
import YourOrders from "../../containers/YourOrders/YourOrders";
import PlaceOrder from "../../containers/PlaceOrder/PlaceOrder";
import OrderSuccess from "../../containers/PlaceOrder/OrderSuccess/OrderSuccess";
import Authenticate from "../../containers/Authenticate/Authenticate";
import YourAccount from "../../containers/YourAccount/YourAccount";
import AccountUpdate from "../../containers/YourAccount/AccountUpdate/AccountUpdate";

const Layout = (props) => {
  return (
    <Container>
      <Nav />
      <Route path="/" exact component={Smoothie} />
      <Route path="/authenticate" component={Authenticate} />
        <Route path="/orders" component={YourOrders} />
        <Route path="/place-order" component={PlaceOrder} />
        <Route path="/order-success" component={OrderSuccess} />
        <Route path="/users/:uid" component={YourAccount} />
        <Route path="/update-account" component={AccountUpdate} />

    </Container>
  )
};

export default Layout;