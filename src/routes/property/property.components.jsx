import React from "react";
import CopyRights from "../../components/copy-right/copy-right.component";
import DynamicHero from "../../components/dynamic-hero/dynamic-hero.component";
import Footer from "../../components/footer/footer.component";
import { FooterIcon } from "../../components/footer/footer.styles";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Pagination from "../../components/pagination/pagination.component";
import ProjectsDisplay from "../../components/projects-display/projects-display.component";
import {
  BathIcon,
  BedIcon,
  ContactIcon,
  ContactUsContainer,
  LocationIcon,
  PropertyContainer,
  ServiceItem,
  TrackRecords,
} from "./property.styles";
import locPath from "../../assets/icons/s8-place_marker.png";
import contPath from "../../assets/icons/s8-shake_phone.png";
import Button from "../../components/button/button.component";
import { ButtonInverted } from "../../components/button/button.styles";

import LikeIconPath from "../../assets/icons/icons8-like@2x.png";
import LocationIconPath from "../../assets/icons/icons8-place_marker-1.png";
import BathPath from "../../assets/icons/icons8-shower_and_tub@2x.png";
import BedPath from "../../assets/icons/icons8-bedroom@2x.png";
const Property = () => {
  return (
    <PropertyContainer>
      <DynamicHero imgName="78116@2x.png" title="" />{" "}
      <div className="content-box">
        <div className="property">
          <div className="top">
            <div className="property-preview">
              <div className="deal-title">
                Amron Ville
                <span className="deal-size">300 per sqm</span>
              </div>
              <div className="deal-location">
                <LocationIcon src={LocationIconPath} />
                Abraham Adesanya, Ajah, Lagos
              </div>
              <div className="deal-amenities">
                <div className="amenities-prop bed">
                  <BedIcon src={BedPath} />3 Bedroom
                </div>
                <div className="amenities-prop bathroom">
                  <BathIcon src={BathPath} />3 Bathroom
                </div>
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="agent">
              <div className="title">Contact Agent</div>
              <div className="agent-details">
                <div className="agent-img"></div>
                <div className="agent-other">
                  <span className="agent-name">Femi Adeniyi </span>
                  <span className="agent-phone">+234(0) 8100 000 000 </span>
                  <span className="agent-email">info@femiadeniyi.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            {" "}
            <div className="props">
              <div className="table-title">Details</div>
              <table>
                <tbody>
                  <tr>
                    <td className="key">Home Area:</td>
                    <td className="value">300 per sqm</td>
                  </tr>
                  <tr>
                    <td className="key">Rooms:</td>
                    <td className="value">3</td>
                  </tr>
                  <tr>
                    <td className="key">Baths:</td>
                    <td className="value">3</td>
                  </tr>
                  <tr>
                    <td className="key">Property Status:</td>
                    <td className="value">For Sale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="props">
              <div className="table-title"></div>
              <table>
                <tbody>
                  <tr>
                    <td className="key">Lot Dimension: </td>
                    <td className="value">10x40x35 </td>
                  </tr>
                  <tr>
                    <td className="key">Beds:</td>
                    <td className="value">3</td>
                  </tr>
                  <tr>
                    <td className="key">Price:</td>
                    <td className="value">N3,500,000</td>
                  </tr>
                  <tr>
                    <td className="key"></td>
                    <td className="value"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-req">
        <div className="contact-box">
          <div className="cta-title">Be the first to review us</div>
          <form className="cta-form" action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </form>
          <div className="submit"> SUBMIT</div>
        </div>
      </div>
      <Footer />
    </PropertyContainer>
  );
};

export default Property;
