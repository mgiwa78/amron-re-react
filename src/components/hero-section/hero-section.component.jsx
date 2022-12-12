import React from "react";
import { HeroImg, HeroSectionContainer } from "./hero-section.styles";
// import heroImgPath from "../../assets/images/483@2x.png";
const HeroSection = () => {
  const imgPath = require(`../../assets/images/483@2x.png`);

  return (
    <HeroSectionContainer imgPath={imgPath}>
      <div className="hero-img">
        <div className="hero-body">
          <div className="hero-text">A unique balance of luxury life</div>
        </div>
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;
