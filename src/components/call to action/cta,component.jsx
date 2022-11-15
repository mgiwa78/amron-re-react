import React from "react";
import Button from "../button/button.component";
import { CallToActionContainer } from "./cta.styles";

const CallToAction = () => {
  return (
    <CallToActionContainer>
      <div className="call-to-action">
        <div>
          <div className="cta-title">We have amazing deals for you</div>
          <div className="cta-boby">
            We are proudly driven to help design a better world by listening and
            understanding how our clients operate in order to generate the best
            solutions in the best
          </div>
        </div>
        <Button>REQUEST A QUOTE</Button>
      </div>
    </CallToActionContainer>
  );
};

export default CallToAction;
