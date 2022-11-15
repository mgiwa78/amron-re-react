import styled, { css } from "styled-components/macro";

export const ProjectsDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color0);
  width: 100vw;
  min-height: 600px;
  height: max-content;
  padding: 80px 0;

  .project-items {
    width: var(--contentwidth);
    display: flex;
    gap: 80px;
    row-gap: 40px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const LocationIcon = styled.img`
  width: 14px;
  margin-right: 5px;
  height: 14px;
`;
export const ProjectItem = styled.div`
  height: 413px;
  border-radius: 17px;
  width: calc(25% - 60px);

  ${({ ImgName }) =>
    css`
      background: url("/images/${ImgName}");
    `}

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .project-details {
    height: 100%;
    width: 100%;
    border-radius: 15px;
    display: flex;
    background: transparent
      linear-gradient(180deg, #00000000 0%, #151515e0 100%) 0% 0% no-repeat
      padding-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    padding: 20px;
    gap: 10px;
  }
  .project-title {
    font-size: var(--font-size4);
    color: var(--color0);
    text-align: left;
    width: 230px;
  }
  .project-location {
    font-size: var(--font-size10);
    color: var(--color8);
  }
`;
