import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  background-color: var(--color17);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color0);
  flex-wrap: wrap;

  align-items: center;
  .footer-container {
    width: var(--contentwidth);
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 30px;
    height: 319px;
  }
  .footer-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    .address {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      font-weight: 300;

      p {
        margin-left: 10px;

        text-align: left;
        width: 200px;
        line-height: 20px;
      }
    }
    .contact {
      display: flex;

      justify-content: center;
      align-items: flex-start;
      font-weight: 300;
      p {
        margin-left: 10px;
        text-align: left;
        width: 200px;
        line-height: 20px;
      }
    }
    .fb-title {
      font-size: var(--font-size7);
      font-weight: var(--font-weight6);
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    li {
      line-height: 25px;

      font-size: var(--font-size8);
      font-weight: 300;
    }
    .contact-info {
    }
  }
`;
export const LogoBox = styled.img`
  height: 70px;
`;
export const FooterIcon = styled.img``;
export const FooterLink = styled(Link)`
  line-height: 25px;
  color: var(--color0);
  text-decoration: none;
  font-weight: 100;
`;
