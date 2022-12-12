import styled, { css } from "styled-components/macro";

export const DynamicHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: max-content;

  .dynamic-container {
    width: var(--contentwidth);
    display: flex;
    flex-direction: column;
    justify-items: center;
    position: relative;
    height: 100%;
  }
  .dynamic-hero-img {
    display: flex;
    text-align: left;
    width: 100vw;

    height: 577px;
    ${({ imgPath }) =>
      css`
        background: url("${imgPath}");
      `}

    background-position: center;
    background-size: cover;
  }
  .dynamic-hero-body {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 577px;

    width: 100%;
    position: relative;
    background: transparent
      linear-gradient(180deg, #00000000 0%, #000000a5 100%) 0% 0% no-repeat
      padding-box;
  }
  .dynamic-hero-text {
    bottom: 100px;
    width: 100%;
    position: absolute;
    font-size: var(--font-size1);
    font-weight: var(--font-weight5);
    color: white;
    height: max-content;
  }
`;
