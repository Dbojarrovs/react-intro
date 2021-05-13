import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Nav = (props) => {
  return (
    <Menu color="red" stackable inverted>
      <Menu.Item>
        <img src={logo} alt="Pizza Pal Logo" />
      </Menu.Item>

      <Menu.Item as={NavLink} to="/" exact>
        Pizza Pal
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
