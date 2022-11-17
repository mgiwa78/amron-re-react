import styled from "styled-components/macro";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: max-content;
`;
export const ProjectsNav = styled.div`
  background-color: var(--color9);
  height: 197px;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;
  height: max-content;
  padding: 60px 0;

  .projects-container {
    width: var(--contentwidth);
    display: flex;
    justify-items: center;
    gap: 30px;
    height: max-content;
    align-items: center;
  }

  .projects-nav-items {
    list-style: none;
    border-radius: 5px;

    background-color: var(--color0);

    height: 103px;
    display: flex;
    list-style: none;

    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    .projects-nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      color: var(--color12);

      width: calc(25% - 10px);
      height: 60px;
      font-weight: var(--font-weight6);
      font-size: var(--font-size7);

      border-right: 1px solid var(--color24);
      &:hover {
        border-radius: 5px;

        border-right: none;
        background-color: var(--color6);
        color: var(--color0);
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  .pro {
    background-color: blue;
    border: 1px solid black;
    height: 200px;
    width: 200px;
  }
`;
