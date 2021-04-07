import React from "react";
import { Menu } from 'semantic-ui-react';

const Nav = (props) => {
  return (
    <Menu color='green' stackable inverted>
    <Menu.Item>
      <img src='images/smoothie.png' alt='Smoothie Logo' />
    </Menu.Item>

    <Menu.Item active>
      Smoothie
    </Menu.Item>

    <Menu.Item>
      Your Orders
    </Menu.Item>

  </Menu>
  )
};

export default Nav;