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
  return (
    <ProjectsDisplayContainer>
      <div className="project-items">
        <ProjectItem ImgName="2229.png">
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 1)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem ImgName="Image 9.png">
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 2)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem ImgName="Image 11.png">
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 3)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem ImgName="Image 5.png">
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 4)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem ImgName="Image 5.png">
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 4)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </ProjectItem>
        <ProjectItem ImgName="Image 5.png">
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
