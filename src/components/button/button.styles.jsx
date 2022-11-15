import styled from "styled-components/macro";

const BaseBtn = styled.div``;

export const ButtonDefault = styled(BaseBtn)`
  background-color: var(--color6);
  color: var(--color0);
  width: max-content;
  height: max-content;
  padding: 11px 18px;
  border-radius: 5px;
`;
export const ButtonInverted = styled(BaseBtn)`
  color: var(--color0);
  border: 1px solid var(--color0);
  width: max-content;
  height: max-content;
  padding: 11px 18px;
  border-radius: 5px;
`;
