import styled, { css } from "styled-components/macro";

export const SubsidiariesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: max-content;
`;
export const SubsidiariesList = styled.div`
  height: max-content;
  width: var(--contentwidth);
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;
  height: max-content;
  padding: 90px 20px;
  @media only screen and (min-width: 1000px) {
    height: max-content;
    width: var(--contentwidth);
    flex-direction: row;

    display: flex;
    justify-content: center;
    align-content: center;
    gap: 30px;
    height: max-content;
    padding: 90px 0;
  }
`;
export const SubsidiaryItem = styled.div`
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    width: 100%;
    flex-wrap: no-wrap;

    .sub-item-left {
      .subsidiary-name {
        text-align: left;
      }
      width: 40% !important;
    }
    .sub-item-right {
      height: 363px !important;
      width: 50% !important;
    }
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .sub-item-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    .subsidiary-heading {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      .subsidiary-initials {
        font-size: var(--font-size4);
        font-weight: var(--font-weight7);
        display: flex;
        justify-content: center;
        align-items: center;
        .subsidiary-initials-p1 {
          background-color: var(--color6);
          width: 53px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 53px;
          border-radius: 60px;
          color: var(--color0);
          margin-right: 4px;
        }
        .subsidiary-initials-p2 {
          color: var(--color5);
        }
      }
      .subsidiary-name {
        color: var(--color4);
        font-size: var(--font-size3);
        font-weight: var(--font-weight6);
      }
    }
    .subsidiary-description {
      text-align: left;

      width: 100%;

      .short-desc {
        margin-bottom: 25px;
        color: var(--color28);
        font-size: var(--font-size8);
        font-weight: var(--font-weight5);
      }
      table {
        width: 100%;

        tbody {
          text-align: left;
          font-size: var(--font-size8);
          font-weight: var(--font-weight4);
          width: 100%;
        }

        tr {
          height: 20px;
        }
        td {
          font-weight: var(--font-weight5);
          text-transform: capitalize;
          &.key {
            text-align: start;
            color: var(--color5);
          }
          &.value {
            padding-left: 10px;
            color: var(--color4);
          }
        }
      }
    }
  }
  .sub-item-right {
    height: 343px;
    width: 100%;
    ${({ imgName }) =>
      css`
        background: url("/images/${imgName}");
      `}

    background-position: center;
    background-size: cover;
  }
`;
