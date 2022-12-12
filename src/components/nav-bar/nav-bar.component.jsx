import React from "react";
import { NavigationContainer, NavLink, NavLogo } from "./nav-bar.styles";
import LogoPath from "../../assets/logo/logo-desktop.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const NavBar = ({ type }) => {
  const imgPath = require(`../../assets/logo/logo-desktop2.png`);

  return (
    <NavigationContainer
      imgPath={imgPath}
      className="nav-container"
      type={type}
    >
      {/* <div className="nav-container">
        <div className="logo-box">
          <NavLogo src={LogoPath} />
        </div>
        <ul>
          <NavLink to="/">home</NavLink>
          <NavLink to="/properties">properties</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/subsidiaries">subsidiaries</NavLink>
          <NavLink to="/aboutus">about us</NavLink>
          <NavLink to="/contact" className="contact-btn">
            contact
          </NavLink>
        </ul>
      </div> */}
      <Navbar className="nav-box" expand="lg">
        <NavLink to="/">
          <div className="logo-box">
            <NavLogo imgPath={imgPath} />
          </div>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">home</NavLink>
            <NavLink to="/properties">properties</NavLink>
            <NavLink to="/projects">projects</NavLink>
            <NavLink to="/subsidiaries">subsidiaries</NavLink>
            <NavLink to="/aboutus">about us</NavLink>
            <NavLink to="/contact" className="contact-btn">
              contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationContainer>
  );
};

export default NavBar;
