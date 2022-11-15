import styled from "styled-components/macro";

export const CallToActionContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .call-to-action {
    border-radius: 20px;
    text-align: left;
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
    }
  }
`;
