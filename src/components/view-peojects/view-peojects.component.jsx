import React from "react";
import {
  LocationIcon,
  ProjectDetails,
  ProjectImages,
  ViewProjectBackdrop,
  ViewProjectContainer,
  ViewProjectItem,
} from "./view-peojects.styles";
import LocationIconPath from "../../assets/icons/icons8-place_marker-1.png";

const ViewProject = () => {
  return (
    <ViewProjectContainer>
      <ViewProjectItem>
        {" "}
        <ProjectImages lgImg="Image 8@2x.png">
          <div className="largeImg"></div>
          <div className="btm">
            <div className="smlImg"></div>
            <div className="smlImg"></div>
            <div className="smlImg"></div>
          </div>
        </ProjectImages>
        <ProjectDetails>
          <div className="name">Palm heights homes (phase 1)</div>
          <div className="location">
            <LocationIcon src={LocationIconPath} /> lugbe abuja
          </div>
          <div className="description">
            <div className="title">Description</div>
            <div className="text-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="key">Units:</td>
                <td className="value">35</td>
              </tr>
              <tr>
                <td className="key">Project start:</td>
                <td className="value">2007</td>
              </tr>
              <tr>
                <td className="key">Project completion date:</td>
                <td className="value">2010</td>
              </tr>
              <tr>
                <td className="key">Location:</td>
                <td className="value">Lugbe, Abuja</td>
              </tr>
            </tbody>
          </table>
        </ProjectDetails>
      </ViewProjectItem>
    </ViewProjectContainer>
  );
};

export default ViewProject;
