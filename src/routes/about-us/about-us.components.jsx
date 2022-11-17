import React from "react";
import AboutSection from "../../components/about-section/about-section.component";
import CopyRights from "../../components/copy-right/copy-right.component";
import DynamicHero from "../../components/dynamic-hero/dynamic-hero.component";
import Footer from "../../components/footer/footer.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Pagination from "../../components/pagination/pagination.component";
import ProjectsDisplay from "../../components/projects-display/projects-display.component";
import { AboutUsContainer, ServiceItem, TrackRecords } from "./about-us.styles";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <DynamicHero imgName="2229@2x.png" title="About Us" />
      <AboutSection />{" "}
      <div className="content-box">
        <div className="services">
          <div className="title">Our Services</div>{" "}
          <div className="sevices-list">
            <ServiceItem imgName="Image 13@2x.png">
              <div className="service-item-right"></div>
              <div className="service-item-left">
                <div className="service-item-name">Architectural Design</div>
                <div className="service-item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br /> Ut enim ad minim veniam
                </div>
              </div>
            </ServiceItem>
            <ServiceItem imgName="Image 13@2x.png">
              <div className="service-item-right"></div>
              <div className="service-item-left">
                <div className="service-item-name">Architectural Design</div>
                <div className="service-item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br /> Ut enim ad minim veniam
                </div>
              </div>
            </ServiceItem>
            <ServiceItem imgName="Image 13@2x.png">
              <div className="service-item-right"></div>
              <div className="service-item-left">
                <div className="service-item-name">Architectural Design</div>
                <div className="service-item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br /> Ut enim ad minim veniam
                </div>
              </div>
            </ServiceItem>
            <ServiceItem imgName="Image 13@2x.png">
              <div className="service-item-right"></div>
              <div className="service-item-left">
                <div className="service-item-name">Architectural Design</div>
                <div className="service-item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br /> Ut enim ad minim veniam
                </div>
              </div>
            </ServiceItem>
          </div>
        </div>
      </div>
      <div className="history-section">
        <div className="content-box">
          <div className="title">Our History</div>
          <div className="history-content">
            <div className="history-content-box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <br />
              doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut , sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
            <div className="history-content-box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <br />
              doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut , sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
      </div>
      <div className="track-record">
        <div className="content-box">
          <TrackRecords imgName="1223@2x.png">
            <div className="records">
              <div className="record-item">
                Over <span className="record-number">20+</span>
                <span className="record-name">Years Experience</span>
              </div>
              <div className="record-item">
                Over <span className="record-number">20+</span>
                <span className="record-name">Satisfied Clients</span>
              </div>
              <div className="record-item">
                Over <span className="record-number">20+</span>
                <span className="record-name">Satisfied Clients</span>
              </div>
              <div className="record-item">
                Over <span className="record-number">20+</span>
                <span className="record-name">Properties Sold</span>
              </div>
            </div>
            <div className="trackImg"></div>
          </TrackRecords>
        </div>
      </div>
      <Footer />
    </AboutUsContainer>
  );
};

export default AboutUs;
