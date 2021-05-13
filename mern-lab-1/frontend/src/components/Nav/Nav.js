import React from "react";
import { Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


const Nav = (props) => {
  return (
    <Menu color='green' stackable inverted>
    <Menu.Item>
      <img src='images/smoothie.png' alt='Smoothie Logo' size='large'/>
    </Menu.Item>

    <Menu.Item as={NavLink} to="/" exact>
       Smoothie
      </Menu.Item>

      <Menu.Item as={NavLink} to="/orders">
        Your Orders
      </Menu.Item>

      <Menu.Item as={NavLink} to="/users/12345678">
        Your Account
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/authenticate">
          Signup/Login
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          Log out
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;