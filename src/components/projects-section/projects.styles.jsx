import styled, { css } from "styled-components/macro";

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color7);
  width: 100vw;
  gap: 20px;
  height: 600px;
  padding: 40px 0;
  .projects-heading {
    color: var(--color0);
    font-weight: var(--font-weight6);
    font-size: var(--font-size2);
  }
  .project-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .project-item {
      ${({ imgPath }) =>
        css`
          background: url("${imgPath}");
        `}
      height: 313px;
      border-radius: 17px;
      width: 259px;
      background-position: center;
      background-size: contain;
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
  }

  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color7);
    width: 100vw;
    gap: 30px;
    height: 600px;
    padding: 90px 0;
    .projects-heading {
      color: var(--color0);
      font-size: var(--font-size2);
    }
    .project-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .project-item {
        height: 413px;
        border-radius: 17px;
        width: 340px;

        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        .project-details {
          height: 100%;
          width: 100%;
          border-radius: 15px;
          display: flex;
          background: transparent
            linear-gradient(180deg, #00000000 0%, #151515e0 100%) 0% 0%
            no-repeat padding-box;
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
    }
  }
`;
export const LocationIcon = styled.img`
  width: 14px;
  margin-right: 5px;
  height: 14px;
`;
