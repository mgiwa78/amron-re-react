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
    flex-direction: column;

    width: var(--contentwidth);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 30px;
    height: max-content;
    padding: 40px 0;
  }
  .footer-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    :nth-child(3) {
      ul {
        margin-left: 0px;
      }
    }
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
        font-size: var(--font-size8);
      }
    }
    .contact {
      display: flex;

      justify-content: center;
      align-items: flex-start;
      font-weight: 300;
      p {
        font-size: var(--font-size8);

        margin-left: 10px;
        text-align: left;
        width: 200px;
        line-height: 20px;
      }
    }
    .fb-title {
      font-size: var(--font-size7);
      font-weight: var(--font-weight6);
      margin-bottom: -6px;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 10px;

    li {
      line-height: 25px;

      font-size: var(--font-size8);
      font-weight: 300;
    }
    .contact-info {
    }
  }

  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1400px) {
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
      justify-content: space-around;
      align-items: center;
      flex-direction: row;

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
      padding-left: 10px;

      li {
        line-height: 25px;

        font-size: var(--font-size8);
        font-weight: 300;
      }
      .contact-info {
      }
    }
  }
`;
export const LogoBox = styled.img`
  height: 70px;
`;
export const FooterIcon = styled.img``;
export const FooterLink = styled(Link)`
  line-height: 18px;
  color: var(--color0);
  text-decoration: none;
  font-size: var(--font-size8);

  font-weight: 100;
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1400px) {
    line-height: 25px;
  }
`;
