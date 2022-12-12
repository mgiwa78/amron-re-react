import React from "react";
import { AboutSectionContainer } from "./about-section.styles";

import abtImg from "../../assets/images/310.png";
import Button from "../button/button.component";
const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <div className="text-block">
        <div className="block-header">
          We are focused to create excellent environments where our clients can
          succeed
        </div>
        <div className="block-body">
          Amron global services is primarily a real estate company based in
          Abuja, with over 15years of experience Amron has developed 3 estate in
          Abuja and 3 under construction. Amron has subsidiaries such as
          Starcoat Paint (Paint production company), Sky heights Academy
          (School) and Palm Heights Homes (Real estate and architectural
          design).
        </div>
        <Button>Learn More</Button>
      </div>
      <div
        className="img"
        style={{
          backgroundImage: `url("/images/310.png")`,
        }}
        alt=""
      />
    </AboutSectionContainer>
  );
};

export default AboutSection;
