import styled, { css } from "styled-components/macro";

export const ProjectsDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    flex-direction: column;
    row-gap: 40px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-width: 1000px) {
    .project-items {
      width: var(--contentwidth);
      display: flex;
      gap: 80px;
      row-gap: 40px;
      justify-content: center;
      flex-direction: row !important;
      align-items: flex-start;
    }
  }
`;
export const LocationIcon = styled.img`
  width: 14px;
  margin-right: 5px;
  height: 14px;
`;
export const ProjectItem = styled.div`
  height: 313px;
  border-radius: 10px;
  width: 260px;

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
  @media only screen and (min-width: 1000px) {
    height: 343px;
    border-radius: 17px;
    width: calc(26% - 20px);

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
  }
`;
