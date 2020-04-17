import React, { Component } from "react";
import {
  Navbar,
  Classes,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  AnchorButton,
} from "@blueprintjs/core";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar className={Classes.DARK}>
        <NavbarGroup>
          <NavbarHeading>Prime Study</NavbarHeading>
          <NavbarDivider />
          <AnchorButton text="Lịch học" minimal rightIcon="calendar" />
        </NavbarGroup>
      </Navbar>
    );
  }
}
