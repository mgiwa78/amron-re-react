import React from "react";
import CopyRights from "../../components/copy-right/copy-right.component";
import DynamicHero from "../../components/dynamic-hero/dynamic-hero.component";
import Footer from "../../components/footer/footer.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Pagination from "../../components/pagination/pagination.component";
import ProjectsDisplay from "../../components/projects-display/projects-display.component";
import {
  SubsidiariesContainer,
  SubsidiariesList,
  SubsidiaryItem,
} from "./subsidiaries.styles";

const Subsidiaries = () => {
  const imgPath = require(`../../assets/images/3837@2x (Small).png`);

  return (
    <SubsidiariesContainer>
      <DynamicHero imgName="786@2x.png" title="Our Subsidiaries" />
      <SubsidiariesList>
        <SubsidiaryItem imgPath={imgPath}>
          <div className="sub-item-left">
            <div className="subsidiary-heading">
              <div className="subsidiary-initials">
                <div className="subsidiary-initials-p1">SH</div>
                <div className="subsidiary-initials-p2">Academy</div>
              </div>
              <div className="subsidiary-name">Skyheights academy (School)</div>
            </div>

            <div className="subsidiary-description">
              <div className="short-desc">
                Based in lugbe, sky heights is a primary and secondary school.
              </div>
              <table>
                <tbody>
                  <tr>
                    <td className="key">Location:</td>
                    <td className="value">
                      Palm heights phase 1, von road, lugbe, abuja
                    </td>
                  </tr>
                  <tr>
                    <td className="key">Purpose:</td>
                    <td className="value">school</td>
                  </tr>
                  <tr>
                    <td className="key">Established:</td>
                    <td className="value">2015</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="sub-item-right"
            style={{
              backgroundImage: `url("/images/786@2x.png")`,
            }}
          ></div>
        </SubsidiaryItem>
      </SubsidiariesList>
      <Footer />
    </SubsidiariesContainer>
  );
};

export default Subsidiaries;
