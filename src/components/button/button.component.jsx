import React from "react";
import { ButtonDefault, ButtonInverted } from "./button.styles";

const Button = ({ children }) => {
  return <ButtonDefault>{children}</ButtonDefault>;
};

export default Button;

export const InvertedBtn = ({ children }) => {
  return <ButtonInverted>{children}</ButtonInverted>;
};
