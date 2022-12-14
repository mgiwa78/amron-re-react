import styled, { css } from "styled-components/macro";

export const AboutSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  align-items: flex-start;
  gap: 30px;

  .text-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    text-align: left;
    .block-header {
      font-size: var(--font-size3);
      font-weight: var(--font-weight6);
      color: var(--color4);
    }
    .block-body {
      line-height: 16px;
      font-size: var(--font-size8);
      font-weight: var(--font-weight4);
      color: var(--color5);
    }
  }

  .img {
    ${({ imgPath }) =>
      css`
        background: url("${imgPath}");
      `}
    width: 100%;
    height: 280px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    flex-direction: row;
    align-items: center;

    .text-block {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 500px;
      text-align: left;
      .block-header {
        font-size: var(--font-size3);
        font-weight: var(--font-weight6);
        color: var(--color4);
      }
      .block-body {
        line-height: 23px;
        font-size: var(--font-size8);
        font-weight: var(--font-weight4);
        color: var(--color5);
      }
    }

    .img {
      width: 530px;
      height: 480px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;
