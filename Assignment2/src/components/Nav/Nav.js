import React from "react";
import { Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <Menu color='green' stackable inverted>
    <Menu.Item>
      <img src='images/smoothie.png' alt='Smoothie Logo' />
    </Menu.Item>

    <Menu.Item as={NavLink} to="/" exact>
    Smoothie 
  </Menu.Item>

  <Menu.Item as={NavLink} to="/orders">
    Your Orders
  </Menu.Item>

  </Menu>
  )
};

export default Nav;