import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class NavBarSUI extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink}
          to="/customer"
          name="Customer"
          active={activeItem === "customer"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/product"
          name="product"
          active={activeItem === "product"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/store"
          name="store"
          active={activeItem === "store"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to="/sales"
          name="sales"
          active={activeItem === "sales"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
