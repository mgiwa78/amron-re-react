import styled from "styled-components/macro";

const BaseBtn = styled.div``;

export const ButtonDefault = styled(BaseBtn)`
  background-color: var(--color6);
  color: var(--color0);
  width: max-content;
  height: max-content;
  padding: 11px 18px;
  border-radius: 5px;
  font-size: var(--font-size9);

  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1200px) {
    background-color: var(--color6);
    color: var(--color0);
    width: max-content;
    height: max-content;
    padding: 11px 18px;
    border-radius: 5px;
    font-size: var(--font-size9);
  }
`;
export const ButtonInverted = styled(BaseBtn)`
  color: var(--color0);
  border: 1px solid var(--color0);
  width: max-content;
  height: max-content;
  padding: 11px 18px;
  border-radius: 5px;
`;
