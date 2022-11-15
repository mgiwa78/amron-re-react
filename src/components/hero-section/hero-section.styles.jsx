import styled, { css } from "styled-components/macro";

export const HeroSectionContainer = styled.div`
  .hero-img {
    display: flex;
    text-align: left;
    width: 100vw;
    height: 800px;
    background: url("/images/483@2x.png");
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .hero-body {
    width: 100vw;
    padding: 100px;

    height: 800px;
    width: 100%;
    position: relative;
    background: transparent
      linear-gradient(180deg, #00000000 0%, #000000a5 100%) 0% 0% no-repeat
      padding-box;
  }
  .hero-text {
    position: absolute;
    bottom: 100px;
    width: 700px;

    font-size: var(--font-size1);
    font-weight: var(--font-weight5);
    color: white;
    height: max-content;
  }
`;
export const HeroImg = styled.div``;
