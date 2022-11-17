import React from "react";
import { NavigationContainer, NavLink, NavLogo } from "./nav-bar.styles";
import LogoPath from "../../assets/logo/logo-desktop.png";
import { Link } from "react-router-dom";

const NavBar = ({ type }) => {
  return (
    <NavigationContainer className="container" type={type}>
      <div className="nav-container">
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
      </div>
    </NavigationContainer>
  );
};

export default NavBar;
