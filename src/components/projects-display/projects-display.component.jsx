import React from "react";
import { InvertedBtn } from "../button/button.component";
import {
  LocationIcon,
  ProjectItem,
  ProjectsContainer,
  ProjectsDisplayContainer,
} from "./projects-displaystyles";
import LocationIconPath from "../../assets/icons/icons8-place_marker-1.png";

const ProjectsDisplay = () => {
  const imgPath = require(`../../assets/images/2229.png`);
  const imgPath2 = require(`../../assets/images/Image 9.png`);
  const imgPath3 = require(`../../assets/images/Image 11.png`);
  const imgPath5 = require(`../../assets/images/Image 5.png`);

  return (
    <ProjectsDisplayContainer>
      <div className="project-items">
        <ProjectItem imgPath={imgPath}>
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 1)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem imgPath={imgPath2}>
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 2)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem imgPath={imgPath3}>
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 3)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem imgPath={imgPath3}>
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 4)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem imgPath={imgPath}>
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 4)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem imgPath={imgPath2}>
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 4)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
      </div>
    </ProjectsDisplayContainer>
  );
};

export default ProjectsDisplay;
