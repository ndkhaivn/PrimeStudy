import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import {
  Navbar,
  Classes,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  AnchorButton,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

export default function Navigation() {
  const { t, i18n } = useTranslation();

  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup>
        <NavbarHeading>Prime Study</NavbarHeading>
        <NavbarDivider />
        <Link to="/lesson">
          <AnchorButton text={t("Schedule")} minimal rightIcon="calendar" />
        </Link>
      </NavbarGroup>
    </Navbar>
  );
}
