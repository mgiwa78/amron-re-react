import React from "react";
import { InvertedBtn } from "../button/button.component";
import { LocationIcon, ProjectsContainer } from "./projects.styles";
import LocationIconPath from "../../assets/icons/icons8-place_marker-1.png";

const Projects = () => {
  return (
    <ProjectsContainer>
      <div className="projects-heading">Our Projects</div>
      <div className="project-items">
        <div
          className="project-item"
          style={{
            backgroundImage: `url("/images/2229.png")`,
          }}
        >
          <div className="project-details">
            <div className="project-title">Palm heights homes (phase 1)</div>
            <div className="project-location">
              <LocationIcon src={LocationIconPath} />
              lugbe abuja
            </div>
          </div>
        </div>
      </div>
      <InvertedBtn>Load more</InvertedBtn>
    </ProjectsContainer>
  );
};

export default Projects;
