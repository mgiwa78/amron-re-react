import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const NavigationContainer = styled.div`
  ${({ type }) =>
    type === "fixed"
      ? css`
          .nav-container {
            width: var(--contentwidth);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          background: var(--color0) 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 6px #00000029;
          -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px);
          position: absolute;
          top: 0px;
          left: 0;
          width: 100vw;
          border-radius: 0px;
        `
      : css`
          .nav-container {
            width: var(--contentwidth);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 50px;
          }
          ul {
            gap: 30px;
          }
          background: #ffffff63 20% 0%;
          -webkit-backdrop-filter: blur(9px);
          backdrop-filter: blur(5px);
          position: absolute;
          top: 30px;
          width: 86vw;
          border-radius: 10px;
        `}

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 40px;
  z-index: 1;
  opacity: 1;

  ul {
    width: 70%;
    justify-content: space-between;
    display: flex;
    max-width: 700px;
  }
`;

export const NavLink = styled(Link)`
  font-size: var(--font-size8);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--font-weight5);
  color: var(--color5);

  &:hover {
    color: var(--color4);
  }
`;

export const NavLogo = styled.div`
  background: url("/logo/logo-desktop2.png");
  width: 180px;
  height: 100px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
