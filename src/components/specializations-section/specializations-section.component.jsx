import React from "react";
import {
  SpecializtionsContainer,
  SpecIcon,
} from "./specializations-section.styles";
import ArchIcon from "../../assets/icons/icons8-drafting_compass2@2x.png";
import ConrtIcon from "../../assets/icons/icons8-forklift_tracktor@2x.png";
import HouseIcon from "../../assets/icons/icons8-real_sestate@2x.png";
import PaintIcon from "../../assets/icons/icons8-roller_brush@2x.png";

const Specializtions = () => {
  return (
    <SpecializtionsContainer>
      <div className="specsection-first">
        <div className="spec-item">
          {" "}
          <SpecIcon src={ArchIcon} />
          <div className="item-header">Architectural Design</div>
          <div className="item-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="spec-item">
          {" "}
          <SpecIcon src={ConrtIcon} />
          <div className="item-header">Construction Services</div>
          <div className="item-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="spec-item">
          {" "}
          <SpecIcon src={HouseIcon} />
          <div className="item-header">Real Estate Development</div>
          <div className="item-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="spec-item">
          {" "}
          <SpecIcon src={PaintIcon} />
          <div className="item-header">Paint Production</div>
          <div className="item-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
      </div>
      <div className="specsection-second">
        <div className="spec-block-header">Our Specializations</div>
        <div className="spec-block-body">
          We are proudly driven to help design a better world by listening and
          understanding how our clients operate in order to generate the best
          solutions in the best locations.
        </div>
      </div>
    </SpecializtionsContainer>
  );
};

export default Specializtions;
