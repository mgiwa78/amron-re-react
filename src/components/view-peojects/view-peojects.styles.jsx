import styled, { css } from "styled-components/macro";

export const ViewProjectContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: var(--color25);
  z-index: 3;
  /* 
   */
`;
export const ViewProjectBackdrop = styled.div``;
export const ViewProjectItem = styled.div`
  width: 70vw;
  height: 90vh;
  background-color: var(--color0);
  z-index: 4;
  left: 50%;
  padding: 70px;
  border-radius: 5px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%) translateX(-50%);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ProjectImages = styled.div`
  .largeImg {
    width: 617px;
    height: 660px;
    border-radius: 5px;
    ${({ lgImg }) =>
      css`
        background: url("/images/${lgImg}");
      `}

    background-position: center;
    background-size: cover;
  }
  .btm {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 0.6000000238418579px solid #b5b5b5b2;

    .smlImg {
      width: 65px;
      height: 65px;
      border-radius: 5px;
      ${({ lgImg }) =>
        css`
          background: url("/images/${lgImg}");
        `}

      background-position: center;
      background-size: cover;
    }
  }
`;
export const ProjectDetails = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  .name {
    width: 230px;
    height: 55px;
    color: var(--color4);
    font-size: var(--font-size4);
    font-weight: var(--font-weight6);
    text-align: left;
  }
  .location {
    margin-top: 20px;
    color: var(--color8);
    text-align: left;

    font-size: var(--font-size10);
    width: 100%;
    padding-bottom: 40px;
    border-bottom: 0.5px solid #b5b5b5;
  }
  .description {
    padding: 40px 0;
    text-align: left;
    font-weight: var(--font-weight0);
    line-height: 21px;
    width: 100%;
    border-bottom: 0.5px solid #b5b5b5;

    .title {
      font-size: var(--font-size6);
      font-weight: var(--font-weight6);
      margin-bottom: 20px;
    }
    .text-desc {
      width: 290px;

      color: var(--color28);
      font-size: var(--font-size9);
    }
  }
  table {
    padding-top: 40px;
    width: 100%;

    tbody {
      text-align: left;
      font-size: var(--font-size8);
      font-weight: var(--font-weight4);
      width: 100%;
    }

    tr {
      height: 40px;
    }
    td {
      font-weight: var(--font-weight5);
      text-transform: capitalize;
      &.key {
        color: var(--color5);
      }
      &.value {
        color: var(--color4);
      }
    }
  }
`;

export const LocationIcon = styled.img`
  width: 14px;
  margin-right: 5px;
  height: 14px;
`;
