import React from "react";
import CopyRights from "../../components/copy-right/copy-right.component";
import DealItem from "../../components/deal-item/deal-item.component";
import Footer from "../../components/footer/footer.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import { PropertiesContainer } from "./properties.style";

const Properties = () => {
  return (
    <PropertiesContainer>
      <div className="properties-container">
        <NavBar type="fixed" />
        <div className="bradcrumps">
          <span className="crump">Home</span>
          <div className="crumpsep"> </div>
          <span className="crump">Properties</span>
        </div>
        <div className="properties-header">
          <div className="page-desc">Showing 1 - 6 of 12 results</div>
          <div className="page-sort">
            <span className="sort-title">Sort by</span>: Location
            <div className="sort-icon"></div>
          </div>
        </div>

        <div className="properties-section">
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
        </div>
        <div className="pagination-box">
          <div className="pagintion-item on">1</div>
          <div className="pagintion-item">2</div>
          <div className="pagintion-item btn">
            <div className="arrw"></div>
          </div>
        </div>
      </div>
      <Footer />
      <CopyRights />
    </PropertiesContainer>
  );
};

export default Properties;
