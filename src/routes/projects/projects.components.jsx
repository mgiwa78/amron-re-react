import React from "react";
import CopyRights from "../../components/copy-right/copy-right.component";
import DynamicHero from "../../components/dynamic-hero/dynamic-hero.component";
import Footer from "../../components/footer/footer.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Pagination from "../../components/pagination/pagination.component";
import ProjectsDisplay from "../../components/projects-display/projects-display.component";
import ViewProject from "../../components/view-peojects/view-peojects.component";
import { ProjectsContainer, ProjectsNav } from "./projects.styles";

const Projects = () => {
  return (
    <ProjectsContainer>
      {/* <ViewProject /> */}
      <DynamicHero imgName="9347@2x (Medium).png" title="Projects" />
      <ProjectsNav>
        <div className="projects-container">
          <div className="projects-nav-items">
            <div className="projects-nav-item active">Architecture</div>
            <div className="projects-nav-item ">Construction</div>
            <div className="projects-nav-item ">Real estate</div>
            <div className="projects-nav-item ">Paint production</div>
          </div>{" "}
        </div>
        {/* */}
      </ProjectsNav>
      <ProjectsDisplay />
      <Pagination />
      <Footer />
    </ProjectsContainer>
  );
};

export default Projects;
