import React from "react";
import {
  FooterContainer,
  FooterIcon,
  FooterLink,
  LogoBox,
} from "./footer.styles";

import logoPath from "../../assets/logo/AMRON Horizontal White2@2x.png";
import locPath from "../../assets/icons/icons8-place_marker.png";
import contPath from "../../assets/icons/icons8-shake_phone.png";
import CopyRights from "../copy-right/copy-right.component";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-container">
        <LogoBox src={logoPath} />
        <div className="footer-box">
          <div className="fb-title">Contact Information</div>
          <div className="address">
            <FooterIcon src={locPath} />
            <p>
              Estate office, palm heights homes phase 2, von road, lugbe, abuja
            </p>
          </div>
          <div className="contact">
            <FooterIcon src={contPath} />
            <p> 08032468948 09054551017 08092468948</p>
          </div>
        </div>
        <div className="footer-box">
          <div className="fb-title">Services</div>
          <ul>
            <li>Architectural design</li>
            <li>Construction</li>
            <li>Real estate</li>
            <li>Paint production</li>
            <li>development </li>
          </ul>
        </div>
        <div className="footer-box">
          <div className="fb-title">Useful Links</div>
          <ul>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Subsidiaries</FooterLink>
            <FooterLink>Projects</FooterLink>
            <FooterLink>Properties</FooterLink>
          </ul>
        </div>
      </div>
      <CopyRights />
    </FooterContainer>
  );
};

export default Footer;
