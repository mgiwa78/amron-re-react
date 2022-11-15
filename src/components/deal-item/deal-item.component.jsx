import React from "react";
import {
  BathIcon,
  BedIcon,
  DealItemContainer,
  LikeIcon,
  LocationIcon,
} from "./deal-item.styles";

import LikeIconPath from "../../assets/icons/icons8-like@2x.png";
import LocationIconPath from "../../assets/icons/icons8-place_marker-1.png";
import BathPath from "../../assets/icons/icons8-shower_and_tub.png";
import BedPath from "../../assets/icons/icons8-bedroom-4.png";
const DealItem = () => {
  return (
    <DealItemContainer>
      <div className="item-top">
        <div className="selling-div sale">For Sale</div>
        <div className="like-box">
          <LikeIcon src={LikeIconPath} />
        </div>
      </div>
      <div className="item-btm">
        <div className="deal-location">
          <LocationIcon src={LocationIconPath} />
          Abraham Adesanya, Ajah, Lagos
        </div>
        <div className="deal-title">
          Amron Ville
          <span className="deal-size">300 per sqm</span>
        </div>
        <div className="deal-amenities">
          <div className="amenities-prop bed">
            <BedIcon src={BedPath} />3 Bedroom
          </div>
          <div className="amenities-prop bathroom">
            <BathIcon src={BathPath} />3 Bathroom
          </div>
        </div>
        <div className="deal-price">N3,500,000 </div>
      </div>
    </DealItemContainer>
  );
};

export default DealItem;
