import styled from "styled-components/macro";

export const CopyRightsContainer = styled.div`
  .body {
    background-color: var(--color18);
    color: var(--color0);
    display: flex;
    width: 100vw;
    padding: 10px 0;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size11);
    font-weight: var(--font-weight3);
  }
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1400px) {
    .body {
      background-color: var(--color18);
      color: var(--color0);
      display: flex;
      width: 100vw;
      padding: 10px 0;
      text-transform: uppercase;
      justify-content: center;
      align-items: center;
      font-size: var(--font-size10);
      font-weight: var(--font-weight3);
    }
  }
`;
