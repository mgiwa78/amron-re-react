import React from "react";
import CopyRights from "../../components/copy-right/copy-right.component";
import DynamicHero from "../../components/dynamic-hero/dynamic-hero.component";
import Footer from "../../components/footer/footer.component";
import { FooterIcon } from "../../components/footer/footer.styles";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Pagination from "../../components/pagination/pagination.component";
import ProjectsDisplay from "../../components/projects-display/projects-display.component";
import {
  ContactIcon,
  ContactUsContainer,
  ServiceItem,
  TrackRecords,
} from "./contact.styles";
import locPath from "../../assets/icons/s8-place_marker.png";
import contPath from "../../assets/icons/s8-shake_phone.png";
import Button from "../../components/button/button.component";

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <DynamicHero imgName="786@2x.png" title="Contact Us" />
      <div className="content-box">
        <div className="contact-info">
          <div className="contact-title">Contact Information</div>
          <div className="address">
            <ContactIcon src={locPath} />
            <p>
              Estate office, palm heights homes phase 2, von road, lugbe, abuja
            </p>
          </div>
          <div className="contact">
            <FooterIcon src={contPath} />
            <p> 08032468948 09054551017 08092468948</p>
          </div>
        </div>
        <div className="contact-req">
          <div className="contact-title">Leave Us a Message</div>
          <form className="contact-form" action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Emial" />
            <input type="number" placeholder="Phone" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </form>
          <Button> Submit</Button>
        </div>
      </div>

      <Footer />
    </ContactUsContainer>
  );
};

export default ContactUs;
