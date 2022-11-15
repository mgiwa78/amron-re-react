import styled from "styled-components/macro";

export const AboutSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
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
    background: url("/images/310.png");
    width: 530px;
    height: 480px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
