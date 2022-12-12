import React from "react";
import NavBar from "../nav-bar/nav-bar.component";
import { DynamicHeroContainer } from "./generic-hro.styles";

const DynamicHero = ({ imgName, title }) => {
  return (
    <DynamicHeroContainer imgName={imgName}>
      <div
        className="dynamic-hero-img"
        style={{
          backgroundImage: `url("/images/${imgName}")`,
        }}
      >
        <div className="dynamic-hero-body">
          <div className="dynamic-container">
            <NavBar />

            <div className="dynamic-hero-text">{title}</div>
          </div>
        </div>
      </div>{" "}
    </DynamicHeroContainer>
  );
};

export default DynamicHero;
