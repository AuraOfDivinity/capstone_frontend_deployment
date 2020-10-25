import React, { useState } from "react";
import "../../assets/demo/style.css";
import Logo from "../../assets/img/logoDocV.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const HomeNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img src={Logo} className="subPhoto" alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto justify-content-center" navbar>
            <NavItem>
              <NavLink href="/app/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/pricing">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/register">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HomeNavBar;
