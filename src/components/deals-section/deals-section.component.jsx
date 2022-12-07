import React from "react";
import DealItem from "../deal-item/deal-item.component";
import { DealsSectionContainer } from "./deals-section.styles";

const DealsSection = () => {
  return (
    <DealsSectionContainer>
      <div className="title">Amazing Deals</div>
      <div className="deals-display">
        <DealItem />
        <DealItem />
        <DealItem />
      </div>
      <div className="deals-footer">
        <ul className="deal-trails">
          <li className="off ">
            <div className="deal-trail"></div>
          </li>
          <li className="deal-trail off"></li>
          <li className=" on">
            <div className="deal-trail"></div>
          </li>
          <li className="deal-trail off"></li>
          <li className="deal-trail off"></li>
        </ul>
      </div>
    </DealsSectionContainer>
  );
};

export default DealsSection;
