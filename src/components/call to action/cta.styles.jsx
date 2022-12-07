import styled from "styled-components/macro";

export const CallToActionContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .call-to-action {
    flex-direction: column;

    border-radius: 8px;
    gap: 20px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: auto;
    background-color: var(--color9);
    padding: 30px 41px;
    .cta-title {
      font-size: var(--font-size4);
      font-weight: var(--font-weight6);
      margin-bottom: 10px;
    }
    .cta-boby {
      width: 100%;
      font-size: var(--font-size5);

      color: var(--color5);
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
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    .call-to-action {
      border-radius: 20px;
      text-align: left;
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 893px;
      height: 183px;
      background-color: var(--color9);
      padding: 30px 41px;
      .cta-title {
        font-size: var(--font-size4);
        font-weight: var(--font-weight6);
        margin-bottom: 10px;
      }
      .cta-boby {
        width: 513px;
        color: var(--color5);
        font-size: var(--font-size7);
      }
    }
  }
`;
