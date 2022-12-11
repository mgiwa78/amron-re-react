import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  font-size: var(--fs-head);
  gap: 40px;

  @media only screen and (min-width: 1200px) {
    gap: 70px;
  }
`;
