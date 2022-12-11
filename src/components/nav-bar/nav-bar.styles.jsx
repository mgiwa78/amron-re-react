import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const NavigationContainer = styled.div`
  margin-bottom: -40px;
  padding: 0;
  width: 100vw;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
  border-radius: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  .nav-box {
    width: var(--contentwidth);
  }
  .me-auto {
    margin-top: 20px;
  }
  @media only screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0 40px;
    z-index: 1;
    opacity: 1;
    width: var(--contentwidth) !important;
    left: 50%;
    transform: translateX(-50%);

    .nav-box {
      width: 100% !important;
      display: flex;
      justify-content: space-between !important;
      flex-direction: row;
      padding: 15px 0 !important;
      align-items: center;
    }
    .navbar-collapse {
      width: 690px !important;
      justify-content: space-between;
      display: flex;
      align-items: center;
      flex-grow: 0;

      .navbar-nav {
        width: 100%;
        justify-content: space-between;
        display: flex;
        align-items: center;
      }
    }

    .contact-btn {
      background-color: var(--color6);
      color: var(--color0);
      width: max-content;
      height: max-content;
      padding: 11px 18px;
      border-radius: 5px;
      &:hover {
        color: var(--color0);
      }
    }
    ${({ type }) =>
      type === "fixed"
        ? css`
            width: 100vw !important;

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
            left: 50%;
            transform: translateX(-50%);
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
            background: rgb(255, 255, 255);
            background: linear-gradient(
              165deg,
              rgba(255, 255, 255, 0.4) 0%,
              rgba(255, 255, 255, 0.8) 100%
            );
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            position: absolute;
            top: 30px;
            border-radius: 10px;
          `}
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
  height: 60px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
