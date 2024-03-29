import React, { Component } from "react";
import { Container } from "reactstrap";
import NavBarSUI from "./NavBarSUI";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavBarSUI />
        <Container className="main-container">{this.props.children}</Container>
      </div>
    );
  }
}
