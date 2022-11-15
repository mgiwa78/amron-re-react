import React from "react";
import Footer from "../../components/footer/footer.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Pagination from "../../components/pagination/pagination.component";
import ProjectsDisplay from "../../components/projects-display/projects-display.component";
import { ProjectsContainer, ProjectsNav } from "./projects.styles";

const Projects = () => {
  return (
    <ProjectsContainer>
      <div className="projects-hero-img">
        <div className="projects-hero-body">
          <div className="projects-container">
            <NavBar />

            <div className="projects-hero-text">Projects</div>
          </div>
        </div>
      </div>{" "}
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
